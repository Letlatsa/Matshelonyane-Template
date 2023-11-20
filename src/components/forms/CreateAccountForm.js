import { React, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '../../assets/phone.svg';
import PasswordIcon from '../../assets/password.svg';
import AccountIcon from '../../assets/account.svg';
import { RegisterEndPoint } from '../../services/EndPoints';

function CreateAccountForm() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('');

  //initial form state and error state
  const initialFormState = {
    phone: '',
    password: '',
    confirmPassword: ''
  };

  const initialErrorState = {
    accountError: '',
    phoneError: '',
    passwordError: '',
    confirmPasswordError: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleButtonClick = async () => {
    const { password, confirmPassword, phone } = formData;

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

    if (password !== confirmPassword) {
      errors.confirmPasswordError = 'Passwords do not match';
    }

    if (!accountType) {
      errors.accountError = 'Enter ccount types';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Ensure that formData matches the expected payload format
      const dataToSend = {
        number: phone,
        password: password,
        accountType: accountType
      };

      ApiRequest(dataToSend);
    }
  };

  const ApiRequest = (formData) => {
    RegisterEndPoint(formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleButtonClicked = () => {
    navigate('/');
  };

  const styledBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const styledSelect = {
    width: '100%',
    borderBottom: ' 1px solid white'
  };

  const inputContainer = {
    width: '100%',
    marginBottom: '30px'
  };

  const styledSubmitButton = {
    height: '50px',
    marginBottom: '30px',
    marginTop: '15px'
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div>
      <Box sx={{ marginTop: '20px', color: 'white' }}>
        <Box sx={{ right: '10px !important', marginBottom: '50px' }}>
          <Typography variant='h1'>Create an Account</Typography>
        </Box>
        <Stack spacing={1} sx={inputContainer}>
          <FormControl variant="standard">
            <InputLabel id="Account-type">
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
              sx={styledSelect}
              value={accountType}
              error={!!formErrors.accountError}
              onChange={handleChange}
            >
              <MenuItem value="customer">Client</MenuItem>
              <MenuItem value="driver">Driver</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
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
              value={formData.phone}
              onChange={handleInputChange}
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
                  Password
                </div>
              }
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!formErrors.passwordError}
              helperText={formErrors.passwordError}
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
                  Confirm Password
                </div>
              }
              type="password"
              name="confirmPassword"
              placeholder="Enter your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={!!formErrors.confirmPasswordError}
              helperText={formErrors.confirmPasswordError}
            />
          </FormControl>
        </Stack>
        <Box>
          <Button
            variant="contained"
            type="submit"
            sx={styledSubmitButton}
            onClick={handleButtonClick}
          >
            Sign Up
          </Button>
          <Box sx={styledBox}>
            <Typography
              sx={{
                textAlign: 'center'
              }}
            >
              Already have an account?
            </Typography>
          </Box>

          <Box sx={styledBox}>
            <Button variant="text" onClick={handleButtonClicked}>
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CreateAccountForm;
