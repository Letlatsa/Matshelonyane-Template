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

function CreateAccountForm() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
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
    color: '#FFEB22',
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    fontWeight: '600',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
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

  return (
    <div>
      <Box sx={{ marginTop: '20px' }}>
        <FormControl sx={styledFormControl}>
          <Box sx={{ right: '10px !important' }}>
            <Typography sx={styledTypography}>Create an Account</Typography>
          </Box>
          <Box sx={inputContainerBox}>
            <InputLabel id="Account-type" sx={styledInputLabel}>
              Account type
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
              <Button variant="text" sx={styledTextButton} onClick={handleButtonClick}>
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
