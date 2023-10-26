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

export { LoginEndPoint, RegisterEndPoint };