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
  MenuItem
} from '@mui/material';
import TextButton from '../Buttons/TextButton';

const LoginForm = () => {
  const [accountType, setAccountType] = useState('');

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <FormControl>
      <Box>
        <Typography>Welcome to Matshelonyane !</Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <InputLabel id="Account-type">Account type</InputLabel>
        <Select
          variant="standard"
          labelId="Account-type"
          id="cars"
          value={accountType}
          onChange={handleChange}
          sx={{ width: '100%' }}
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
          sx={{ width: '100%' }}
        />
        <TextField
          variant="standard"
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          sx={{ width: '100%' }}
        />
      </Box>
      <Box
        sx={{
          width: '100%'
        }}
      >
        <LoginButton />
        <Typography>Don't have an account?</Typography>
        <TextButton />
      </Box>
    </FormControl>
  );
};

export default LoginForm;
