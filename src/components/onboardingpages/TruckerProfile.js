import { React, useState } from 'react';
import { Avatar } from '@mui/material';
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
import UploadIcon from '../../assets/upload.svg';
import LocationIcon from '../../assets/location.svg';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

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
  alignItems: 'center',
  marginBottom: '30px'
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
  boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: 'transparent'
  }
};
const styledInputLabel = {
  marginTop: 22,
  color: 'white',
  '&:hover': {
    color: 'white'
  }
};
const accountLabelContainer = {
  display: 'flex',
  alignItems: 'center'
};
function TruckerProfile() {
  const initialFormState = {
    firstName: '',
    lastName: '',
    phone: '',
    Location: 'Gaborone'
  };

  const initialErrorState = {
    firstNameError: '',
    lastNameError: '',
    phoneError: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState('');
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
    const errors = {};

    if (!firstName) {
      errors.firstNameError = 'Firstname is required';
    }
    if (!lastName) {
      errors.lastNameError = 'Firstname is required';
    }
    if (!phone) {
      errors.phoneError = 'Phone number is required';
    } else if (!/^[7]\d{7}$/.test(phone)) {
      errors.phoneError = 'Phone number must start with 7 and be 8 digits long';
    } else if (!/^\d+$/.test(phone)) {
      errors.phoneError = 'Phone number can only contain digits';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Success');
      navigate('/onboardinglicense');
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };

      reader.readAsDataURL(file);
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
  const uploadIconStyle = {
    position: 'absolute',
    right: '100px',
    bottom: '0px',
    cursor: 'pointer'
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
            marginLeft: '15px',
            textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
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
              <Avatar alt="User Avatar" src={avatarImage} sx={{ width: 100, height: 100 }} />
            ) : (
              <Avatar alt="User Avatar" sx={{ width: 100, height: 100 }}></Avatar>
            )}
            <Box style={uploadIconStyle}>
              <img src={UploadIcon} alt="Account" width="30" height="20" />
            </Box>
          </Box>
        </label>

        <Typography
          sx={{
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px',
            marginLeft: '15px'
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
                value={selectedLocation}
                onChange={handleLocationChange}
                variant="standard"
                sx={styledSelect}
              >
                {locationOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Box>
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
          </FormControl>
        </Box>
      </Box>
    </div>
  );
}

export default TruckerProfile;
