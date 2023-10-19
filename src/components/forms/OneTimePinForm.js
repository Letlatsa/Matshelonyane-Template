import { Box, FormControl, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useState } from 'react';

const OneTimePinFForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(''); // State to store validation error

  const handleButtonClick = () => {
    if (validateOtp(otp)) {
      // If OTP is valid, navigate to the next page
      navigate('/');
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
    width: '100%',
    '& input': {
      border: 0
    },
    marginBottom: '50px'
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px'
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

  return (
    <Box>
      <FormControl sx={styledFormControl}>
        <Box sx={{ right: '10px !important' }}>
          <Typography sx={styledTypography}>One Time Pin</Typography>
        </Box>
        <Box sx={inputContainerBox}>
          <MuiOtpInput sx={styledOtpInput} length={6} value={otp} onChange={handleChange} />
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </Box>
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
                textAlign: 'center'
              }}
            >
              Enter the OTP sent to your number in order to reset password
            </Typography>
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default OneTimePinFForm;
