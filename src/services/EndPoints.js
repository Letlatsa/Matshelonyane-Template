//import IAMApiClient from './Api-client';
import { IAMApiClient } from './Api-client';
import { FleetApiClient } from './Api-client';
import axios from 'axios';

const LoginEndPoint = async (formData) => {
  const response = await IAMApiClient.post('/login', formData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response;
};

const RegisterEndPoint = async (formData) => {
  const response = await IAMApiClient.post('/register', formData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response;
};

const ClientProfileEndpoint = async (formData, Token) => {
  const response = await IAMApiClient.post('/profile/customer', formData, {
    headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${Token}` }
  });
  return response;
};

const TruckerProfileEndpoint = async (formData, Token) => {
  const response = await IAMApiClient.post('/profile/driver', formData, {
    headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${Token}` }
  });
  return response;
};

const ForgotPasswordEndPoint = async (formData) => {
  const response = await IAMApiClient.post('/pass_reset', formData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response;
};

const UpdateDriverLicenseEndPoint = async (formData, Token) => {
  const response = await IAMApiClient.put('/driverlicense', formData, {
    headers: { 'Content-Typen': 'multipart/form-data', Authorization: `Bearer ${Token}` }
  });
  return response;
};

const RetrieveSurnameEndpoint = async (Token) => {
  try {
    const response = await IAMApiClient.get('/me', {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error occurred while making the request:', error);
    throw error;
  }
};
const RetrieveTruckerSurnameEndpoint = async (Token) => {
  try {
    const response = await IAMApiClient.get('/me', {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error occurred while making the request:', error);
    throw error;
  }
};

const RetrieveDriverNameEndpoint = async (Token) => {
  try {
    const response = await IAMApiClient.get('/', {
      headers: { Authorization: `Bearer ${Token}` }
    });

    const driverData = response.data.filter((user) => user.accountType === 'driver');

    if (driverData.length > 0) {
      const { firstName, lastName } = driverData[0];

      return { firstName, lastName };
    } else {
      throw new Error('No user with accountType "driver" found.');
    }
  } catch (error) {
    console.error('Error occurred while making the request:', error);
    throw error;
  }
};

///Fleet endpoints
const TruckRegisterEndPoint = async (formData, Token) => {
  const response = await FleetApiClient.post('/register', formData, {
    headers: { 'Content-Typen': 'multipart/form-data', Authorization: `Bearer ${Token}` }
  });
  return response;
};

const TruckRetrieveEndpoint = async (Token) => {
  try {
    const response = await FleetApiClient.get('/trucktypes', {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error retrieving trucks:', error);
    throw error;
  }
};

export {
  LoginEndPoint,
  RegisterEndPoint,
  ClientProfileEndpoint,
  TruckerProfileEndpoint,
  ForgotPasswordEndPoint,
  UpdateDriverLicenseEndPoint,
  RetrieveSurnameEndpoint,
  RetrieveDriverNameEndpoint,
  TruckRegisterEndPoint,
  TruckRetrieveEndpoint,
  RetrieveTruckerSurnameEndpoint

};
