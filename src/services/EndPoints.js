//import IAMApiClient from './Api-client';
import { IAMApiClient } from './Api-client';
import { FleetApiClient } from './Api-client';

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
    sessionStorage.setItem('user', JSON.stringify(response.data));
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

const updateProfilePictureEndpoint = async (formData, Token) => {
  try {
    const response = await IAMApiClient.put('/propic', formData, {
      headers: { 'Content-Typen': 'multipart/form-data', Authorization: `Bearer ${Token}` }
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
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

const UserTrucksEndpoint = async (Token) => {
  try {
    const response = await FleetApiClient.get('/trucks', {
      headers: { Authorization: `Bearer ${Token}` }
    });
    return response;
  } catch (error) {
    console.error('Error retrieving trucks:', error);
    throw error;
  }
};

const LocationRetrieveEndpoint = async (Token) => {
  try {
    const response = await FleetApiClient.get('/locations', {
      headers: { Authorization: `Bearer ${Token}` }
    });
    return response;
  } catch (error) {
    console.error('Error retrieving location:', error);
    throw error;
  }
};

const TrucksInDeliveryArea = async (Token, deliveryAreaId) => {
  try {
    const response = await FleetApiClient.get(`/deliveryarea?deliveryArea=${deliveryAreaId}`, {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log('Response', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving trucks in delivery area:', error);
  }
};
const EditProfileEndPoint = async (formData, Token) => {
  try {
    const response = await IAMApiClient.put('/profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${Token}` }
    });
    return response;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

const ViewTruckerInfo = async (Token, account) => {
  try {
    const response = await IAMApiClient.get(`/trucker?accID=${account}`, {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log('Response hhhhhhhhh', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving profiles:', error);
  }
};
const ViewClientInfo = async (Token, account) => {
  try {
    const response = await IAMApiClient.get(`/acc?accID=${account}`, {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log('Response customers', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving profiles:', error);
  }
};

const PostProfileVisits = async (Token, data) => {
  try {
    const response = await FleetApiClient.post('/visit', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token}`
      }
    });

    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Error posting profile visit', error);
    throw error;
  }
};

const GetServiceLocation = async (loc) => {
  try {
    const response = await FleetApiClient.get(`/location?loc=${loc}`, {
      headers: { 'Content-Typen': 'multipart/form-data' }
    });
    return response;
  } catch (error) {
    console.error('Error retrieving location:', error);
    throw error;
  }
};

const DownloadUmageEndPoint = async (key) => {
  try {
    const response = await IAMApiClient.get(`/download?key=${key}`, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const GetProfileVisits = async (Token) => {
  try {
    const response = await FleetApiClient.get(`/profileViews`, {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log('Response get profile visits', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving visits', error);
  }
};
const PostRequestEndpoint = async (formData, Token) => {
  const response = await FleetApiClient.post('/postride', formData, {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${Token}` }
  });
  return response;
};
const GetPostRequestEndpoint = async (Token) => {
  try {
    const response = await FleetApiClient.get('/ride/driver', {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log('Responses', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving', error);
  }
};
const GetPostRequestCustomerEndpoint = async (Token) => {
  try {
    const response = await FleetApiClient.get('/ride/customer', {
      headers: { Authorization: `Bearer ${Token}` }
    });
    console.log('Responses', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving', error);
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
  TruckRegisterEndPoint,
  TruckRetrieveEndpoint,
  RetrieveTruckerSurnameEndpoint,
  updateProfilePictureEndpoint,
  UserTrucksEndpoint,
  LocationRetrieveEndpoint,
  TrucksInDeliveryArea,
  EditProfileEndPoint,
  ViewTruckerInfo,
  PostProfileVisits,
  DownloadUmageEndPoint,
  GetServiceLocation,
  GetProfileVisits,
  PostRequestEndpoint,
  GetPostRequestEndpoint,
  GetPostRequestCustomerEndpoint,
  ViewClientInfo
};
