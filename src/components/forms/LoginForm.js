import React from 'react';
import { useState } from 'react';
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
import {
  LoginEndPoint,
  RetrieveSurnameEndpoint,
  UserTrucksEndpoint
} from '../../services/EndPoints';

import { useToken } from '../../Hooks/TokenContext';

import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [accountType, setAccountType] = useState('');
  const [formData, setFormData] = useState({ phone: '', password: '', accountType: '' });
  const [loginStatus, SetLoginStatus] = useState(null);

  const { setTokenData } = useToken();
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    phoneError: '',
    passwordError: ''
  });

  const handleButtonClick = async () => {
    console.log('Button Clicked');
    const { phone, password } = formData;
    const errors = {};

    if (!phone) {
      errors.phoneError = 'Phone number is required';
    } else if (!/^[2]\d{10}$/.test(phone)) {
      errors.phoneError = 'Phone number must start with 2 and be 11 digits long'; // Updated regex
    } else if (!/^\d+$/.test(phone)) {
      errors.phoneError = 'Phone number can only contain digits';
    }
    if (!password) {
      errors.passwordError = 'Password is required';
    }

    if (!accountType) {
      errors.accountTypeError = 'Account type is required';
    } else if (!['driver', 'customer'].includes(accountType.toLowerCase())) {
      errors.accountTypeError = 'Invalid account type';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const dataToSend = {
        number: phone,
        password: password,
        accountType: accountType
      };

      ApiRequest(dataToSend);
    }
  };

  const ApiRequest = (formData) => {
    LoginEndPoint(formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { accessToken, refreshToken } = response.data;
          setTokenData(accessToken, refreshToken);

          TokenSession(accessToken, refreshToken);

          userRedirect(accountType, accessToken);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 403) {
          SetLoginStatus('invalid');
        } else {
          SetLoginStatus('nonexistent');
        }
      });
  };

  const userRedirect = (accountType, accessToken) => {
    RetrieveSurnameEndpoint(accessToken)
      .then(async (response) => {
        if (response.status === 200) {
          const { lastName } = response.data;
          if (!lastName || lastName === undefined || lastName === null) {
            onboardingRedirecter(accountType);
          } else {
            if (accountType === 'driver') {
              const license = response.data.driversLicense;
              const truckdata = await getTruckProfile(accessToken);
              console.log('this is truckdata', truckdata);
              if (license === undefined || license === null) {
                navigate('/onboardinglicense');
              } else if (Array.isArray(truckdata) && truckdata.length <= 0) {
                navigate('/truckOnboardingProfile');
              } else {
                homeRedirecter(accountType);
              }
            } else if (accountType === 'customer') {
              homeRedirecter(accountType);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTruckProfile = async (accessToken) => {
    try {
      const response = await UserTrucksEndpoint(accessToken);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      // Ensure to return a value in case of an error
      return [];
    }
  };

  const onboardingRedirecter = (accountType) => {
    if (accountType === 'driver') {
      navigate('/truckerOnboardingProfile');
    } else {
      navigate('/clientonboardingprofile');
    }
  };

  const homeRedirecter = (accountType) => {
    if (accountType === 'driver') {
      navigate('/truckerhome');
    } else {
      navigate('/clienthome');
    }
  };

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleButtonClicked = () => {
    const restAccountType = {
      accountType: accountType
    };
    sessionStorage.setItem('passReset', JSON.stringify(restAccountType));
    navigate('/forgotpassword');
  };

  const TokenSession = (accessToken, refreshToken) => {
    const Tokens = {
      accessToken: accessToken,
      refreshToken: refreshToken
    };

    sessionStorage.setItem('Tokens', JSON.stringify(Tokens));
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
    borderBottom: ' 2px solid white'
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
        {loginStatus === 'invalid' && (
          <Typography
            variant="subtitle1"
            sx={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}
          >
            Invalid Credentials
          </Typography>
        )}
        {loginStatus === 'failed' && (
          <Typography
            variant="subtitle1"
            sx={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}
          >
            Login failed. Please try again.
          </Typography>
        )}{' '}
      </Box>
      <Stack sx={inputContainerBox} spacing={1}>
        <FormControl variant="standard">
          <InputLabel id="Account-type" sx={styledInputLabel}>
            <Box sx={accountLabelContainer}>
              <img
                src={AccountIcon}
                alt="Phone"
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
                  alt="Phone"
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
            Forgot Password ?
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
