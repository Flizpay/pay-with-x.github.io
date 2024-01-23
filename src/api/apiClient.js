import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const client = axios.create({
  baseURL: 'http://localhost:3001',
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

export const register = async (firstName, lastName, companyName, email, password) => {
  const response = await client.post('/merchants/register', {
    firstName: firstName,
    lastName: lastName,
    companyName: companyName,
    email: email,
    password: password
  });
  return response.message;
};


export const requestEmailCode = async (email) => {
  const response = await client.post('/merchants/request-email-code', {
    email:email,
  });

return response.message;
};

export const verifyEmailCode = async (email, resetCode) => {
  const response = await client.post('/merchants/verify-email-code', {
    email:email,
    resetCode:resetCode
  });

return response;
};

export const login = async (email, password) => {
  const response = await client.post('/merchants/login', {
    email: email,
    password: password,
  });
  return response.data;
};

export const getTargetMerchant = async (email) => {
  const response = await client.get(`/merchants/get-target-merchant/${email}`);
  return response.data;
};

export const getMerchant = async () => {
  const response = await client.get(`/merchants/get-merchant`);
  return response.data;
};

export const requestPayment = async (identifier, amount) => {
  const response = await client.post('/p2p/requests/', { identifier, amount });
  return response.message;
};

export const getAmountOwed = async (merchantId, cashierId) => {
  const response = await client.get(`/merchants/${merchantId}/cashier/${cashierId}`);
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

export const getActiveBenefit = async (merchantId) => {
  const response = await client.get(`/benefits/${merchantId}/active-benefit`);
  return response.data;
};

export const setActiveBenefit = async (merchantId, benefitId, customValue) => {
  const response = await client.post(`/benefits/${merchantId}/active-benefit`,
                                    { benefitId, customValue });
  return response.data;
};

export const getPresignedUrl = async (fileName) => {
  const response = await client.get(`/merchants/generate-presigned-url?fileName=${fileName}`);
  return response.data;
};

export const updateLogoUrl = async (logoUrl) => {
  const response = await client.patch(`/merchants/update-logo-url`, {
    logoUrl: logoUrl
  });
  return response.data;
};

export const setNewPassword = async (email, newPassword) => {
  const response = await client.post('/merchants/reset-password', {
    email:email,
    newPassword:newPassword
  });
return response.message;
};

export const resetBaseInfo = async (email, firstName, lastName, companyName, mobilePhone) => {
  const response = await client.post('/merchants/reset-base-info', {
    email:email,
    firstName:firstName,
    lastName:lastName,
    companyName:companyName,
    mobilePhone:mobilePhone
  });
  return response.message;
};