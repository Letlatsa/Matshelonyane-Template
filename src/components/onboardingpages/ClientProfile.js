import { React, useState } from 'react';
import { Avatar } from '@mui/material';
import { Box, FormControl, TextField, Typography, Button } from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import PhoneIcon from '../../assets/phone.svg';
import UploadIcon from '../../assets/upload.svg';
import { useNavigate } from 'react-router-dom';
import { ClientProfileEndpoint } from '../../services/EndPoints';

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

function ClientProfile() {
  const initialFormState = {
    firstName: '',
    lastName: '',
    phone: ''
  };

  const initialErrorState = {
    firstNameError: '',
    lastNameError: '',
    phoneError: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const navigate = useNavigate();

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
      errors.lastNameError = 'Lastname is required';
    }
    if (!phone) {
      errors.phoneError = 'Phone number is required';
    } else if (!/^[7]\d{7}$/.test(phone)) {
      errors.phoneError = 'Phone number must start with 7 and be 8 digits long';
    } else if (!/^\d+$/.test(phone)) {
      errors.phoneError = 'Phone number can only contain digits';
    }
    setFormErrors(errors);
    console.log(formErrors);

    if (Object.keys(errors).length === 0) {
      const dataToSend = {
        firstName: firstName,
        lastName: lastName,
        phone: phone
      };
      // Check if an image has been selected
      if (avatarImage) {
        dataToSend.propic = avatarImage;
      }

      ApiRequest(dataToSend);
    }
  };
  const ApiRequest = (formData) => {
    ClientProfileEndpoint(formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate('/clientprofilecomplete');
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
  return (
    <div>
      <Box>
        <Typography
          sx={{
            fontSize: 24,
            color: 'white',
            textAlign: 'center',
            marginBottom: '30px',
            marginLeft: '15px',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: 'bold',
          }}
        >
          Let’s us get to know you
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

export default ClientProfile;
