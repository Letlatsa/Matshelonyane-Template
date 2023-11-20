import { Box, FormControl, Typography, Button, TextField, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useState } from 'react';

import PasswordIcon from '../../assets/password.svg';

//initial form state and error state
const initialFormState = {
  password: '',
  confirmPassword: ''
};

const initialErrorState = {
  passwordError: '',
  confirmPasswordError: ''
};

const OneTimePinFForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(''); // State to store validation error

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = () => {
    const { password, confirmPassword } = formData;

    console.log(formData);

    const errors = {};

    if (validateOtp(otp)) {
      // If OTP is valid, navigate to the next page
      if (password === '') {
        errors.passwordError = 'Password is required';
      }

      if (password !== confirmPassword) {
        errors.confirmPasswordError = 'Passwords do not match';
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid OTP. Please enter a 6-digit numeric code.');
    }
  };

  const handleChange = (newValue) => {
    setOtp(newValue);
    setError(''); // Clear any previous error when the input changes
  };

  const validateOtp = (otp) => {
    // Ensure OTP is exactly 6 digits and contains only numeric characters
    const pattern = /^\d{6}$/;
    return pattern.test(otp);
  };

  const styledFormControl = {
    width: '100%',
    color: 'white'
  };

  const styledTypography = {
    fontSize: 24,
    marginBottom: '50px'
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '50px'
  };

  const styledBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const styledSubmitButton = {
    height: '50px',
    marginBottom: '30px'
  };

  return (
    <Box>
      <FormControl sx={styledFormControl}>
        <Box sx={{ right: '10px !important' }}>
          <Typography variant="h1" sx={styledTypography}>
            One Time Pin
          </Typography>
        </Box>
        <Stack spacing={1} sx={inputContainerBox}>
          <MuiOtpInput
          length={6}
          value={otp}
          onChange={handleChange}
          style={{
            marginBottom: '8px',
            border: 'none',
            boxShadow: 'none',
            /* other styles */
          }}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}

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
        </Stack>
      </FormControl>
      <Box>
        <Button
          variant="contained"
          color="primary"
          type="button"
          sx={styledSubmitButton}
          onClick={handleButtonClick}
        >
          Submit
        </Button>
        <Box sx={styledBox}>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              color: 'white'
            }}
          >
            Enter the OTP sent to your number in order to reset password
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OneTimePinFForm;
