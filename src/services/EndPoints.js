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

const ClientProfileEndpoint = async (formData, Token) => {
  const response = await ApiClient.post('/profile/customer', formData, {
    headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${Token}` }
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

const RetrieveSurnameEndpoint = async (Token) => {
  try {
    const response = await ApiClient.get('/me', {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error occurred while making the request:', error);
    throw error; // Rethrow the error to the caller for further handling
  }
};

export {
  LoginEndPoint,
  RegisterEndPoint,
  ClientProfileEndpoint,
  TruckerProfileEndpoint,
  ForgotPasswordEndPoint,
  RetrieveSurnameEndpoint
};
