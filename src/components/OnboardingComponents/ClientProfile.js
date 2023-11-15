import { React, useState } from 'react';
import { Avatar } from '@mui/material';
import { Box, FormControl, TextField, Typography, Button } from '@mui/material';
import AccountIcon from '../../assets/account.svg';

import PhoneIcon from '../../assets/phone.svg';

import { useNavigate } from 'react-router-dom';
import { ClientProfileEndpoint } from '../../services/EndPoints';
import { useToken } from '../../Hooks/TokenContext';

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
    backgroundColor: '#58362A',
    color: 'white',
    transition: 'ease-in .3s'
  }
};

function ClientProfile() {
  const { tokens } = useToken();
  const initialFormState = {
    firstName: '',
    lastName: ''
  };

  const initialErrorState = {
    firstNameError: '',
    lastNameError: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    const { firstName, lastName } = formData;
    const accessToken = tokens.accessToken;
    const errors = {};

    if (!firstName) {
      errors.firstNameError = 'Firstname is required';
    }
    if (!lastName) {
      errors.lastNameError = 'Lastname is required';
    }

    setFormErrors(errors);
    console.log(formErrors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();

      if (avatarImage) {
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('file', file);

        ApiRequest(formData, accessToken);
      }
    }
  };
  const ApiRequest = (formData, accessToken) => {
    ClientProfileEndpoint(formData, accessToken)
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

      setFile(file);

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
            fontWeight: 'bold'
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
