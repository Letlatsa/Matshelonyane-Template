import React from 'react';
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

function ForgotPasswordForm() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/onetimepin');
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

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px'
  };

  const styledSubmitButton = {
    fontSize: 18,
    backgroundColor: '#FFEB22',
    width: '100%',
    borderRadius: '15px',
    height: '50px',
    color: '#000000',
    fontWeight: '600',
    textTransform: 'none',
    marginBottom: '30px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: '#FFEB00'
    }
  };

  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div>
      <Box>
        <FormControl sx={styledFormControl}>
          <Box sx={{ right: '10px !important' }}>
            <Typography sx={styledTypography}>Recover Account</Typography>
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
            <Select variant="standard" labelId="Account-type" id="cars" sx={styledSelect}>
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
                    alt="Password"
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
              name="password"
              placeholder="Enter your password"
              sx={styledTextField}
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
              Reset Password
            </Button>
            <Typography
              sx={
                (styledTypography,
                {
                  textAlign: 'center'
                })
              }
            >
              We will send an OTP to your number, to confirm the password reset
            </Typography>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
}

export default ForgotPasswordForm;
