import React, { useState } from 'react';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack
} from '@mui/material';
import TextButton from '../Buttons/TextButton';
import AccountIcon from '../../assets/account.svg';
import PhoneIcon from '../../assets/phone.svg';
import PasswordIcon from '../../assets/password.svg';
import { useToken } from '../../Hooks/TokenContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [accountType, setAccountType] = useState('');
  const [formData, setFormData] = useState({ phone: '', password: '', accountType: '' });
  const [loginStatus, setLoginStatus] = useState(null);

  const { setTokenData } = useToken();
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    phoneError: '',
    passwordError: '',
    accountTypeError: ''
  });

  const handleButtonClick = () => {
    const { phone, password, accountType } = formData;
    const errors = {};
  
    // Phone validation
    if (!phone) {
      errors.phoneError = 'Phone number is required';
    } else if (!/^[2]\d{10}$/.test(phone)) {
      errors.phoneError = 'Phone number must start with 2 and be 11 digits long';
    } else if (!/^\d+$/.test(phone)) {
      errors.phoneError = 'Phone number can only contain digits';
    }
  
    // Password validation
    if (!password) {
      errors.passwordError = 'Password is required';
    }
  
    // Account type validation
    if (!accountType) {
      errors.accountTypeError = 'Account type is required';
    } else if (!['driver', 'customer'].includes(accountType.toLowerCase())) {
      errors.accountTypeError = 'Invalid account type';
    }
  
    // Set form errors state
    setFormErrors(errors);
  
    // If there are no validation errors
    if (Object.keys(errors).length === 0) {
      // Mock successful login
      const accessToken = 'mock_access_token';
      const refreshToken = 'mock_refresh_token';
      const lastName = 'Doe'; // Mock data
      const driversLicense = '123456'; // Mock data
  
      // Update token data
      setTokenData(accessToken, refreshToken);
  
      // Handle token session
      TokenSession(accessToken, refreshToken, lastName, driversLicense, accountType);
  
      // Redirect based on account type
      if (accountType.toLowerCase() === 'driver') {
        navigate('/truckeronboardingprofile'); 
        // navigate('/truckerhome'); // Redirect drivers to /truckerhome
      } else {
        navigate('/clientonboardingprofile');
        //navigate('/clienthome'); // Redirect others (e.g., customers) to /clienthome
      }
    } else {
      // Set login status to failed if there are validation errors
      setLoginStatus('failed');
    }
  };
  

  const handleChange = (event) => {
    const value = event.target.value;
    setAccountType(value);
    setFormData({ ...formData, accountType: value });
  };

  const handleButtonClicked = () => {
    const restAccountType = {
      accountType: accountType
    };
    sessionStorage.setItem('passReset', JSON.stringify(restAccountType));
    navigate('/forgotpassword');
  };

  const TokenSession = (accessToken, refreshToken, lastName, driversLicense, accountType) => {
    const Tokens = {
      accessToken: accessToken,
      refreshToken: refreshToken
    };

    const userInfo = {
      lastName: lastName,
      driversLicense: driversLicense,
      accountType: accountType
    };

    sessionStorage.setItem('Tokens', JSON.stringify(Tokens));
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const styledInputLabel = {
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  };

  const styledSelect = {
    width: '100%',
    color: 'white',
    borderBottom: '2px solid white'
  };

  const styledBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const forgotPasswordButton = {
    marginBottom: '30px',
    width: '170px',
    alignSelf: 'end'
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };

  const styledSubmitButton = {
    height: '50px',
    marginBottom: '30px'
  };

  return (
    <Box>
      <Box
        sx={{ right: '10px !important', marginBottom: '50px', marginTop: '25px', color: 'white' }}
      >
        <Typography variant="h1">Welcome to Matshelonyane!</Typography>
      </Box>
      <Box>
        {loginStatus === 'failed' && (
          <Typography
            variant="subtitle1"
            sx={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}
          >
            Login failed. Please try again.
          </Typography>
        )}
      </Box>
      <Stack sx={inputContainerBox} spacing={1}>
        <FormControl variant="standard">
          <InputLabel id="Account-type" sx={styledInputLabel}>
            <Box sx={accountLabelContainer}>
              <img
                src={AccountIcon}
                alt="Account Type"
                width="30"
                height="20"
                sx={{ marginRight: '30px' }}
              />
              <Box>Account type</Box>
            </Box>
          </InputLabel>
          <Select
            variant="standard"
            labelId="Account-type"
            id="account-type"
            value={accountType}
            onChange={handleChange}
            sx={styledSelect}
          >
            <MenuItem value="customer">Client</MenuItem>
            <MenuItem value="driver">Driver</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard">
          <TextField
            size="small"
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
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              setFormErrors({ ...formErrors, phoneError: '' });
            }}
            error={!!formErrors.phoneError}
            helperText={formErrors.phoneError}
          />
        </FormControl>
        <FormControl variant="standard">
          <TextField
            variant="standard"
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={PasswordIcon}
                  alt="Password"
                  width="30"
                  height="20"
                  sx={{ marginRight: '30px' }}
                />
                <Box>Password</Box>
              </div>
            }
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              setFormErrors({ ...formErrors, passwordError: '' });
            }}
            error={!!formErrors.passwordError}
            helperText={formErrors.passwordError}
          />
        </FormControl>
      </Stack>
      <Box>
        <Box sx={styledBox}>
          <Button variant="text" sx={forgotPasswordButton} onClick={handleButtonClicked}>
            Forgot Password?
          </Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={styledSubmitButton}
          onClick={handleButtonClick}
        >
          Login
        </Button>
        <Box sx={styledBox}>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'white'
            }}
          >
            Don't have an account?
          </Typography>
        </Box>
        <Box sx={styledBox}>
          <TextButton />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
