import ApiClient from './Api-client';

const LoginEndPoint = async (formData) => {
  const response = await ApiClient.post('/login', formData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response;
};

const RegisterEndPoint = async (formData) => {
  const response = await ApiClient.post('/register', formData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response;
};

const ClientProfileEndpoint = async (formData) => {
  const response = await ApiClient.post('/profile/customer', formData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response;
};
const TruckerProfileEndpoint = async (formData) => {
  const response = await ApiClient.post('/profile/driver', formData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response;
};

const ForgotPasswordEndPoint = async (formData) => {
  const response = await ApiClient.post('/pass_reset', formData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response;
};

export {
  LoginEndPoint,
  RegisterEndPoint,
  ClientProfileEndpoint,
  TruckerProfileEndpoint,
  ForgotPasswordEndPoint
};
