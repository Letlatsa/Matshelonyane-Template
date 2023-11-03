import { React, useState } from 'react';
import { Avatar, Stack } from '@mui/material';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  Select,
  InputLabel,
  MenuItem
} from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import PhoneIcon from '../../assets/phone.svg';
import LocationIcon from '../../assets/location.svg';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

import { TruckerProfileEndpoint } from '../../services/EndPoints';
import { useToken } from '../../Hooks/TokenContext';

const styledFormControl = {
  width: '100%',
  color: 'white',
  padding: '0px'
};

const styledTextField = {
  width: '100%',
  '& input': {
    color: 'white',
    borderBottom: ' 3px solid white'
  },
  '& label': {
    color: 'white'
  }
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
  marginTop: '20px',
  marginBottom: '30px',
  boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: 'transparent'
  }
};
const styledInputLabel = {
  color: 'white',
  '&:hover': {
    color: 'white'
  }
};
// eslint-disable-next-line no-unused-vars
const styledHelperText = {
  color: 'red',
  marginRight: '200px'
};
const accountLabelContainer = {
  display: 'flex',
  alignItems: 'center'
};
function TruckerProfile() {
  const { tokens } = useToken();

  console.log(tokens);

  const initialFormState = {
    firstName: '',
    lastName: '',
    phone: '',
    location: ''
  };

  const initialErrorState = {
    firstNameError: '',
    lastNameError: '',
    phoneError: '',
    locationError: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const locationOptions = [
    'Gaborone',
    'Francistown',
    'Molepolole',
    'Maun',
    'Serowe',
    'Kanye',
    'Mahalapye',
    'Mochudi',
    'Lobatse',
    'Palapye',
    'Ramotswa',
    'Mogoditshane',
    'Letlhakane',
    'Tonota',
    'Thamaga',
    'Bobonong',
    'Jwaneng',
    'Orapa',
    'Tlokweng',
    'Selibe-Phikwe',
    'Tshabong',
    'Mmadinare',
    'Gabane',
    'Ghanzi',
    'Kasane',
    'Masunga',
    'Moshupa',
    'Mmopane',
    'Lerala',
    'Shakawe',
    'Lecheng',
    'Kang',
    'Pandamatenga',
    'Mmathethe',
    'Rakops',
    'Tsabong',
    'Gweta',
    'Tsetsebjwe',
    'Pilane',
    'Kalamare',
    'Metsimotlhabe',
    'Mokoboxane',
    'Morwa',
    'Sefophe',
    'Tati Siding',
    'Tsetsebjwe',
    'Tshane',
    'Tshesebe'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, phone } = formData;
    const accessToken = tokens.accessToken;
    const errors = {};

    if (!firstName) {
      errors.firstNameError = 'Firstname is required';
    }
    if (!lastName) {
      errors.lastNameError = 'Lastname is required';
    }
    if (!phone) {
      errors.phoneError = 'Phone number is required';
    } else if (!/^[7]\d{7}$/.test(phone)) {
      errors.phoneError = 'Phone number must start with 7 and be 8 digits long';
    } else if (!/^\d+$/.test(phone)) {
      errors.phoneError = 'Phone number can only contain digits';
    }
    if (!selectedLocation) {
      console.log(selectedLocation);
      errors.locationError = 'Location is required';
    }
    setFormErrors(errors);
    console.log(formErrors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();

      if (avatarImage) {
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('deliveryArea', selectedLocation);
        formData.append('file', file);

        ApiRequest(formData, accessToken);
      }
    }
  };

  const ApiRequest = (formData, accessToken) => {
    TruckerProfileEndpoint(formData, accessToken)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const user = response.data;
          sessionStorage.setItem('user', JSON.stringify(user));
          navigate('/onboardinglicense');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
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
      console.log(file);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const handleButtonClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      navigate('/onboardinglicense');
    }
  };
  const styledAvatarBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };
  const styledSelect = {
    width: '100%',
    color: 'white',
    borderBottom: ' 2px solid white',
    marginBottom: '10px'
  };
  return (
    <div>
      <Box>
        <Box>
          <ProgressBar currentStep={currentStep} />
        </Box>
        <Typography
          sx={{
            fontSize: 24,
            color: 'white',
            textAlign: 'center',
            marginBottom: '15px',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: 'bold',
            marginTop: '50px'
          }}
        >
          Let’s us get to know you
        </Typography>
        <input
          type="file"
          accept="image/*"
          id="avatar-upload"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="avatar-upload">
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
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '15px',
            fontWeight: '700',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Upload your profile picture
        </Typography>
        <Stack spacing={1}>
          <FormControl sx={styledFormControl}>
            <Stack sx={inputContainerBox} spacing={1}>
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
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={PhoneIcon}
                      alt="Phone"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Phone Number
                  </div>
                }
                type="phone"
                name="phone"
                placeholder="Enter your phone number"
                sx={styledTextField}
                value={formData.phone}
                onChange={handleInputChange}
                error={!!formErrors.phoneError}
                helperText={formErrors.phoneError}
              />

              {/* <FormHelperText sx={styledHelperText}>{formErrors.locationError}</FormHelperText> */}
            </Stack>
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
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
              id="location"
              name="location"
              value={selectedLocation}
              onChange={handleLocationChange}
              variant="standard"
              sx={styledSelect}
              error={!!formErrors.locationError}
            >
              {locationOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
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
              Proceed
            </Button>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default TruckerProfile;
