import { React, useState } from 'react';
import { Avatar } from '@mui/material';
import { Box, FormControl, TextField, Typography, Button, Stack } from '@mui/material';
import AccountIcon from '../../assets/account.svg';

import { useNavigate } from 'react-router-dom';
import { ClientProfileEndpoint } from '../../services/EndPoints';
import { useToken } from '../../Hooks/TokenContext';

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

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const styledAvatarBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  const styledSubmitButton = {
    height: '50px',
    marginTop: '6vh',
    marginBottom: '6vh'
  };

  return (
    <div>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '90vh' }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '5vh'
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
          varient="h2"
          sx={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px',
            marginTop: '2vh'
          }}
        >
          Upload your profile picture
        </Typography>
        <Box>
          <FormControl>
            <Stack spacing={1} sx={inputContainerBox}>
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
                value={formData.lastName}
                onChange={handleInputChange}
                error={!!formErrors.lastNameError}
                helperText={formErrors.lastNameError}
              />
            </Stack>
            <Box>
              <Button
                variant="contained"
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
