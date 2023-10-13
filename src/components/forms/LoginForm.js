import React from 'react';
import { useState } from 'react';
import LoginButton from '../Buttons/LoginButton';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import TextButton from '../Buttons/TextButton';
import AccountIcon from '../../assets/account.svg';
import PhoneIcon from '../../assets/phone.svg';
import PasswordIcon from '../../assets/password.svg';

import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [accountType, setAccountType] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/forgotPassword');
  };

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const styledFormControl = {
    width: '100%',
    color: 'white'
  };

  const styledTypography = {
    fontSize: 24,
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    fontWeight: 'bold',
    marginBottom: '25px'
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

  const styledInputLabel = {
    marginTop: 8,
    left: -14,
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  };

  const styledSelect = {
    width: '100%',
    color: 'white',
    borderBottom: ' 2px solid white',
    marginBottom: '10px'
  };

  const styledBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const forgotPasswordButton = {
    color: '#FFEB22',
    alignSelf: 'end',
    fontWeight: '600',
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <Box>
      <FormControl sx={styledFormControl}>
        <Box sx={{ right: '10px !important' }}>
          <Typography sx={styledTypography}>Welcome to Matshelonyane!</Typography>
        </Box>
        <Box sx={inputContainerBox}>
          <InputLabel id="Account-type" sx={styledInputLabel}>
            <Box sx={accountLabelContainer}>
              <img
                src={AccountIcon}
                alt="Phone"
                width="30"
                height="20"
                sx={{ marginRight: '30px' }}
              />
              <box>Account type</box>
            </Box>
          </InputLabel>

          <Select
            variant="standard"
            labelId="Account-type"
            id="cars"
            value={accountType}
            onChange={handleChange}
            sx={styledSelect}
          >
            <MenuItem value="Client">Client</MenuItem>
            <MenuItem value="Driver">Driver</MenuItem>
          </Select>
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
                Number
              </div>
            }
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            sx={styledTextField}
          />
          <TextField
            variant="standard"
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={PasswordIcon}
                  alt="Phone"
                  width="30"
                  height="20"
                  sx={{ marginRight: '30px' }}
                />
                <Box>Password</Box>
              </div>
            }
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            sx={styledTextField}
          />
        </Box>
        <Box>
          <Box sx={styledBox}>
            <Button variant="text" sx={forgotPasswordButton} onClick={handleButtonClick}>
              Forgot Password ?
            </Button>
          </Box>
          <LoginButton />
          <Box sx={styledBox}>
            <Typography
              sx={
                (styledTypography,
                {
                  textAlign: 'center'
                })
              }
            >
              Don't have an account?
            </Typography>
          </Box>
          <Box sx={styledBox}>
            <TextButton />
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
