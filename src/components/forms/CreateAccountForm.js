import { React, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '../../assets/phone.svg';
import PasswordIcon from '../../assets/password.svg';
import AccountIcon from '../../assets/account.svg';

function CreateAccountForm() {
  const navigate = useNavigate();

  //initial form state and error state
  const initialFormState = {
    accountType: 'Client',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  const initialErrorState = {
    phoneError: '',
    passwordError: '',
    confirmPasswordError: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [accountType, setAccountType] = useState('Client');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleButtonClick = () => {
    const { password, confirmPassword, phone } = formData;
    const errors = {};

    if (!phone) {
      errors.phoneError = 'Phone number is required';
    } else if (!/^[7]\d{7}$/.test(phone)) {
      errors.phoneError = 'Phone number must start with 7 and be 8 digits long';
    } else if (!/^\d+$/.test(phone)) {
      errors.phoneError = 'Phone number can only contain digits';
    }

    if (!password) {
      errors.passwordError = 'Password is required';
    }

    if (password !== confirmPassword) {
      errors.confirmPasswordError = 'Passwords do not match';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Success');
      navigate('/');
    }
  };

  const handleButtonClicked = () => {
    navigate('/');
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

  const styledBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const styledTextButton = {
    color: '#FDB299',
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    fontWeight: '600',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  };

  const styledInputLabel = {
    marginTop: 8,
    left: -15,
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
    fontWeight: '100',
    textTransform: 'none',
    marginBottom: '30px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div>
      <Box sx={{ marginTop: '20px' }}>
        <FormControl sx={styledFormControl}>
          <Box sx={{ right: '10px !important' }}>
            <Typography sx={styledTypography}>Create an Account</Typography>
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
              sx={styledSelect}
              value={accountType}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleInputChange}
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
                  Password
                </div>
              }
              type="password"
              name="password"
              placeholder="Enter your password"
              sx={styledTextField}
              value={formData.password}
              onChange={handleInputChange}
              error={!!formErrors.passwordError}
              helperText={formErrors.passwordError}
            />
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
              sx={styledTextField}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={!!formErrors.confirmPasswordError}
              helperText={formErrors.confirmPasswordError}
            />
          </Box>
          <Box>
            <Button
              variant="text"
              color="primary"
              type="submit"
              sx={styledSubmitButton}
              onClick={handleButtonClick}
            >
              Sign Up
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
                Already have an account?
              </Typography>
            </Box>

            <Box sx={styledBox}>
              <Button variant="text" sx={styledTextButton} onClick={handleButtonClicked}>
                Login
              </Button>
            </Box>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
}

export default CreateAccountForm;
