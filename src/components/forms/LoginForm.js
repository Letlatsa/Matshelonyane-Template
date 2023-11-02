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
  Button
} from '@mui/material';
import TextButton from '../Buttons/TextButton';
import AccountIcon from '../../assets/account.svg';
import PhoneIcon from '../../assets/phone.svg';
import PasswordIcon from '../../assets/password.svg';
import { LoginEndPoint, RetrieveSurnameEndpoint } from '../../services/EndPoints';

import { useToken } from '../../Hooks/TokenContext';

import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [accountType, setAccountType] = useState('customer');
  const [formData, setFormData] = useState({ phone: '', password: '', accountType: 'customer' });
  const { setTokenData } = useToken();
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    phoneError: '',
    passwordError: ''
  });

  const handleButtonClick = async () => {
    console.log('Button Clicked');
    const { phone, password, accountType } = formData;
    const errors = {};

    console.log(formData);

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

          userRedirect(accountType, accessToken);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userRedirect = (accountType, accessToken) => {
    RetrieveSurnameEndpoint(accessToken)
      .then((response) => {
        if (response.status === 200) {
          const { lastName } = response.data;
          if (!lastName || lastName === undefined || lastName === null) {
            onboardingRedirecter(accountType);
          } else {
            homeRedirecter(accountType);
          }
        }
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const onboardingRedirecter = (accountType) => {
    if (accountType === 'driver') {
      navigate('/truckerOnboardingProfile');
    }
    navigate('/clientonboardingprofile');
  };

  const homeRedirecter = (accountType) => {
    if (accountType === 'driver') {
      navigate('/truckerhome');
    }
    navigate('/clienthome');
  };

  const handleChange = (event) => {
    setAccountType(event.target.value);
    alert(event.target.value);
  };
  const handleButtonClicked = () => {
    navigate('/forgotpassword');
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
    color: '#FDB299',
    alignSelf: 'end',
    fontWeight: '100',
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
  const styledSubmitButton = {
    fontSize: 18,
    backgroundColor: '#EBDBD5',
    textColor: '#58362A',
    width: '100%',
    borderRadius: '15px',
    height: '50px',
    color: '#58362A',
    fontWeight: '100',
    textTransform: 'none',
    marginBottom: '30px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
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
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              setFormErrors({ ...formErrors, phoneError: '' });
            }}
            error={!!formErrors.phoneError}
            helperText={formErrors.phoneError}
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
            type="password"
            name="password"
            placeholder="Enter your password"
            sx={styledTextField}
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              setFormErrors({ ...formErrors, passwordError: '' });
            }}
            error={!!formErrors.passwordError}
            helperText={formErrors.passwordError}
          />
        </Box>
        <Box>
          <Box sx={styledBox}>
            <Button variant="text" sx={forgotPasswordButton} onClick={handleButtonClicked}>
              Forgot Password ?
            </Button>
          </Box>
          <Button
            variant="text"
            color="primary"
            type="submit"
            sx={styledSubmitButton}
            onClick={handleButtonClick}
          >
            Login
          </Button>
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
