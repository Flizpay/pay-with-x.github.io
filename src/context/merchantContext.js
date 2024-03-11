import React, { createContext, useState, useEffect, useContext } from 'react';
import { getTargetBusiness } from '../api/apiClient'; 

const MerchantContext = createContext();

export const useMerchant = () => {
  const context = useContext(MerchantContext);
  if (!context) {
    throw new Error("useMerchant must be used within a MerchantProvider");
  }
  return context;
};

export const MerchantProvider = ({ children }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [email, setEmail] = useState(null);
  const [merchantId, setMerchantId] = useState(null);

  useEffect(() => {
    const fetchMerchantDetails = async () => {
      if (email) {
        try {
          const merchantDetails = await getTargetBusiness(email);
          setFirstName(merchantDetails.data.firstName);
          setLastName(merchantDetails.data.lastName);
          setCompanyName(merchantDetails.data.companyName);
          setMerchantId(merchantDetails.data.id);

        } catch (error) {
          console.error("Failed to fetch merchant details:", error);
        }
      }
    };

    fetchMerchantDetails();
  }, [email]);

  return (
    <MerchantContext.Provider value={{ setEmail, firstName, lastName, companyName, merchantId }}>
      {children}
    </MerchantContext.Provider>
  );
};
