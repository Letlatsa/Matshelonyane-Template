import React from 'react';
import { useState } from 'react';
import LoginButton from '../Buttons/LoginButton';
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
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [accountType, setAccountType] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/forgotPassword');
  };

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const styledFormControl = {
    width: '100%',
    color: 'white'
  };

  const styledTypography = {
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
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
    marginTop: 4,
    left: '-2%',
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

  return (
    <Box>
      <FormControl sx={styledFormControl}>
        <Box sx={{ right: '10px !important' }}>
          <Typography sx={styledTypography}>Welcome to Matshelonyane!</Typography>
        </Box>
        <Box sx={{ width: '100%', marginTop: '20px' }}>
          <InputLabel id="Account-type" sx={styledInputLabel}>
            Account type
          </InputLabel>
          <Select
            variant="standard"
            labelId="Account-type"
            id="cars"
            value={accountType}
            onChange={handleChange}
            sx={styledSelect}
          >
            <MenuItem value="Client">Client</MenuItem>
            <MenuItem value="Driver">Driver</MenuItem>
          </Select>
          <TextField
            variant="standard"
            label="Number"
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            sx={styledTextField}
          />
          <TextField
            variant="standard"
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            sx={styledTextField}
          />
        </Box>
        <Box sx={{ width: '100%', marginTop: '50px' }}>
          <Button
            variant="text"
            sx={{
              color: '#FFEB22',
              left: 300,
              marginTop: '-50px',
              textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
            }}
            onClick={handleButtonClick}
          >
            Forgot Password ?
          </Button>
          <LoginButton />
          <Typography
            sx={
              (styledTypography,
              {
                textAlign: 'center',
                marginTop: '25px'
              })
            }
          >
            Don't have an account?
          </Typography>
          <TextButton />
        </Box>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
