import { getPresignedUrl, updateLogoUrl, getBusiness } from "../../../api/apiClient";

export const fetchUserData = async (setUserData) => {
  try {
    const response = await getBusiness();
    console.log(response);
    setUserData({
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
      companyName: response.data.companyName,
      logo: response.data.logo,
      pluginToken: response.data.pluginToken,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const handleLogoUpload = async (event, setUserData) => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const presignedUrlData = await getPresignedUrl(file.name, file.type);
    const presignedUrl = presignedUrlData.data.url;

    await fetch(presignedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });

    const logoUrl = presignedUrl.split("?")[0];
    await updateLogoUrl(logoUrl);

    setUserData(prevUserData => ({
      ...prevUserData,
      logo: logoUrl,
    }));

    alert("Logo uploaded successfully!");
  } catch (error) {
    console.error("Error uploading logo:", error);
    alert("Error uploading logo.");
  }
};
