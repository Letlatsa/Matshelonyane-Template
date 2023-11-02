import { Box, FormControl, Typography, Button, TextField } from '@mui/material';
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
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    fontWeight: 'bold',
    marginBottom: '50px'
  };

  const styledOtpInput = {
    marginBottom: '20px',
    width: '100%',
    '& input': {
      border: 0
    }
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

  const styledTextField = {
    width: '100%',
    '& input': {
      color: 'white',
      borderBottom: ' 3px solid white'
    },
    '& label': {
      color: 'white'
    },
    marginBottom: '20px'
  };

  return (
    <Box>
      <FormControl sx={styledFormControl}>
        <Box sx={{ right: '10px !important' }}>
          <Typography sx={styledTypography}>One Time Pin</Typography>
        </Box>
        <Box sx={inputContainerBox}>
          <MuiOtpInput sx={styledOtpInput} length={6} value={otp} onChange={handleChange} />
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
      </FormControl>
      <Box>
        <Button
          variant="text"
          color="primary"
          type="button"
          sx={styledSubmitButton}
          onClick={handleButtonClick}
        >
          Submit
        </Button>
        <Box sx={styledBox}>
          <Typography
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
