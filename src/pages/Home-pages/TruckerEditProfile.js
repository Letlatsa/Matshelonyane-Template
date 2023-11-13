import { React, useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import AccountIcon from '../../assets/account.svg';

import { useNavigate } from 'react-router-dom';
import {
  updateProfilePictureEndpoint,
  RetrieveSurnameEndpoint,
  EditProfileEndPoint,
  LocationRetrieveEndpoint
} from '../../services/EndPoints';

import BackArrow from '../../assets/backVectorWhite.svg';
import LocationIcon from '../../assets/location.svg';

function TruckerHomeProfile() {
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  const userData = sessionStorage.getItem('user');

  const { _id, firstName, lastName, propic, deliveryArea } = JSON.parse(userData);

  const initialFormState = {
    firstName: firstName,
    lastName: lastName
  };

  const initialErrorState = {
    firstNameError: '',
    lastNameError: '',
    locationError: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        getLocations(accessToken);
      } catch (error) {
        console.error('Error fetching locations: ', error);
      }
    };

    fetchLocationData();
  }, [accessToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    const { firstName, lastName } = formData;
    const errors = {};

    if (!firstName) {
      errors.firstNameError = 'Firstname is required';
    }
    if (!lastName) {
      errors.lastNameError = 'Lastname is required';
    }

    if (!selectedLocation) {
      console.log(selectedLocation);
      errors.locationError = 'Location is required';
    }

    setFormErrors(errors);
    console.log(formErrors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append('profileId', JSON.parse(userData)._id);
      formData.append('file', file);

      const profileFrom = {
        profileId: _id,
        updatedInfo: {
          firstName: firstName,
          lastName: lastName,
          deliveryArea: selectedLocation ? selectedLocation : deliveryArea
        }
      };

      const propicWait = PropicApiRequest(formData, accessToken);
      const profileWait = ProfileApiRequest(profileFrom, accessToken);

      if (avatarImage) {
        if (propicWait === 200 && profileWait === 200) {
          refreshSession(accessToken);
        } else {
          console.log('Error updating profile');
          refreshSession(accessToken);
        }
      } else {
        console.log('Error updating profile');
        refreshSession(accessToken);
      }
    }
  };

  const PropicApiRequest = (formData, accessToken) => {
    updateProfilePictureEndpoint(formData, accessToken)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return 200;
        } else return 400;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ProfileApiRequest = (formData, accessToken) => {
    EditProfileEndPoint(formData, accessToken)
      .then((response) => {
        if (response.status === 200) {
          return 200;
        } else return 400;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };

  const getLocations = (accessToken) => {
    LocationRetrieveEndpoint(accessToken)
      .then((locationData) => {
        setLocation(locationData.data);
      })
      .catch((error) => {
        console.log(error, 'Error Fetching Data');
      });
  };

  const refreshSession = (accessToken) => {
    RetrieveSurnameEndpoint(accessToken).then((userData) => {
      const {
        _id,
        firstName,
        lastName,
        propic,
        profileType,
        deliveryArea,
        driversLicense,
        account
      } = userData.data;

      const user = {
        _id: _id,
        firstName: firstName,
        lastName: lastName,
        propic: propic,
        profileType: profileType,
        deliveryArea: deliveryArea,
        driversLicense: driversLicense,
        account: account
      };

      sessionStorage.setItem('user', JSON.stringify(user));

      navigate('/truckerprofileview');
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      setFile(file);

      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
    console.log('Selected Locatiion:', selectedLocation);
  };

  const handleButtonBackArrowClicked = () => {
    navigate('/truckerprofileview');
  };

  const styledFormControl = {
    width: '100%',
    color: 'white'
  };

  const styledTextField = {
    width: '100%',
    '& input': {
      color: 'white',
      borderBottom: ' 3px solid white'
    },
    '& label': {
      color: 'white'
    },
    marginBottom: '10px'
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const styledSubmitButton = {
    fontSize: 18,
    backgroundColor: '#EBDBD5',
    width: '100%',
    borderRadius: '15px',
    height: '50px',
    color: '#58362A',
    fontWeight: '400',
    textTransform: 'none',
    marginBottom: '30px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: '#58362A',
      color: 'white'
    }
  };

  const styledAvatarBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };
  const styledAppBar = {
    background: 'transparent',
    boxShadow: 'none'
  };

  const styledSelect = {
    width: '100%',
    color: 'white',
    borderBottom: ' 2px solid white',
    marginBottom: '50px'
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };

  const styledInputLabel = {
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(196, 149, 133, .7)',
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'scroll'
      }}
    >
      <AppBar position="fixed" sx={styledAppBar}>
        <Toolbar sx={{ height: '70px' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleButtonBackArrowClicked}
          >
            <img src={BackArrow} alt="MenuIcon" width="13" height="30" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: '85vw', overflowY: 'scroll', paddingTop: '60px' }}>
        <Typography
          sx={{
            fontSize: 24,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '30px',
            marginLeft: '15px',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: 'bold'
          }}
        >
          Edit your profile
        </Typography>
        <input
          type="file"
          accept="image/*"
          id="propic"
          name="propic"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="propic">
          <Box sx={styledAvatarBox}>
            {avatarImage ? (
              <Avatar alt="User Avatar" src={avatarImage} sx={{ width: 130, height: 130 }} />
            ) : (
              <Avatar alt="User Avatar" sx={{ width: 130, height: 130 }}></Avatar>
            )}
          </Box>
        </label>

        <Typography
          sx={{
            fontSize: 14,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '15px',
            fontWeight: '700',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Upload your profile picture
        </Typography>
        <Box>
          <FormControl sx={styledFormControl}>
            <Box sx={inputContainerBox}>
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Account"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    First name
                  </div>
                }
                type="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                sx={styledTextField}
                value={formData.firstName}
                onChange={handleInputChange}
                error={!!formErrors.firstNameError}
                helperText={formErrors.firstNameError}
              />
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Lastname"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Last name
                  </div>
                }
                type="lastName"
                name="lastName"
                placeholder="Enter your Last name"
                sx={styledTextField}
                value={formData.lastName}
                onChange={handleInputChange}
                error={!!formErrors.lastNameError}
                helperText={formErrors.lastNameError}
              />
            </Box>
          </FormControl>
          <FormControl sx={styledFormControl}>
            <InputLabel id="location-label" variant="standard" sx={styledInputLabel}>
              <Box sx={accountLabelContainer}>
                <img
                  src={LocationIcon}
                  alt="Location"
                  width="30"
                  height="20"
                  sx={{ marginRight: '30px' }}
                />
                Delivery Area
              </Box>
            </InputLabel>
            <Select
              labelId="location-label"
              id="deliveryArea"
              name="deliveryArea"
              value={selectedLocation}
              onChange={handleLocationChange}
              variant="standard"
              sx={styledSelect}
              error={!!formErrors.locationError}
            >
              {location.map((locationData) => (
                <MenuItem key={locationData._id} value={locationData._id}>
                  {locationData.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            <Button
              variant="text"
              color="primary"
              type="submit"
              sx={styledSubmitButton}
              onClick={validateForm}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default TruckerHomeProfile;
