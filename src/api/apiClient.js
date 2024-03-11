import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const client = axios.create({
  baseURL: 'http://10.10.111.52:3000',
});

client.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@jwtToken');
    if (token) {
      config.headers.Authentication = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.data) {
      error.message = error.response.data.message;
    } else if (error.request) {
      error.message = 'No response received from server';
    } else {
      error.message = 'Error setting up request';
    }
    return Promise.reject(error);
  }
);

export const register = async (firstName, lastName, companyName, email, iban, password) => {
  const response = await client.post('/business/register', {
    firstName: firstName,
    lastName: lastName,
    companyName: companyName,
    email: email,
    password: password,
    iban:iban
  });
  return response.message;
};


export const requestEmailCode = async (email) => {
  const response = await client.post('/business/request-email-code', {
    email:email,
  });

return response.message;
};

export const verifyEmailCode = async (email, resetCode) => {
  const response = await client.post('/business/verify-email-code', {
    email:email,
    resetCode:resetCode
  });

return response;
};

export const login = async (email, password) => {
  const response = await client.post('/business/login', {
    email: email,
    password: password,
  });
  return response.data;
};

export const getTargetBusiness = async (email) => {
  const response = await client.get(`/business/get-target-business/${email}`);
  return response.data;
};

export const getBusiness = async () => {
  const response = await client.get(`/business/get-business`);
  return response.data;
};

export const requestPayment = async (identifier, amount) => {
  const response = await client.post('/p2p/requests/', { identifier, amount });
  return response.message;
};

export const getAmountOwed = async (businessId, cashierId) => {
  const response = await client.get(`/business/${businessId}/cashier/${cashierId}`);
  return response.data;
};

export const getRequests = async (status = null, type = null) => {
  let params = {};
  if (status !== null) params.status = status;
  if (type !== null) params.type = type;

  const response = await client.get('/p2p/requests/', { params });
  return response.data;
};

export const deleteRequest = async (requestId) => {
  const response = await client.delete(`/p2p/requests/${requestId}`);
  return response.data;
};

export const getTargetIban = async (identifier) => {
  const response = await client.get(`/banks/get-target-iban/${identifier}`);
  return response.data;
};

export const getBenefits = async () => {
  const response = await client.get('/benefits');
  return response.data;
};

export const getActiveBenefit = async (businessId) => {
  const response = await client.get(`/benefits/${businessId}/active-benefit`);
  return response.data;
};

export const setActiveBenefit = async (businessId, benefitId, customValue) => {
  const response = await client.post(`/benefits/${businessId}/active-benefit`,
                                    { benefitId, customValue });
  return response.data;
};

export const getPresignedUrl = async (fileName, contentType) => {
  // Append both fileName and contentType to the query string
  const response = await client.get(`/business/generate-presigned-url?fileName=${encodeURIComponent(fileName)}&contentType=${encodeURIComponent(contentType)}`);
  return response.data;
};

export const updateLogoUrl = async (logoUrl) => {
  const response = await client.patch(`/business/update-logo-url`, {
    logoUrl: logoUrl
  });
  return response.data;
};

export const assignNewPassword = async (password, oldPassword, emailCode) => {
  const response = await client.post('/business/reset-password', {
    password:password, 
    oldPassword:oldPassword ,
    emailCode:emailCode
  });
return response.message;
};

export const resetBaseInfo = async (email, firstName, lastName, companyName) => {
  const response = await client.post('/business/edit-base-info', {
    email:email,
    firstName:firstName,
    lastName:lastName,
    companyName:companyName,
  });
  return response.message;
};

export const resetIban = async (email, iban) => {
  const response = await client.post('/business/edit-iban', {
    email:email,
    iban:iban,
  });
  return response.message;
};

export const resetEmail = async (email, newEmail) => {
  const response = await client.post('/business/reset-email', {
    email:email,
    newEmail:newEmail,
  });
  return response.message;
};

export const checkPassword = async (email, password) => {
  const response = await client.post('/business/check-password', {
    email:email,
    password:password,
  });
  return response.message;
};

