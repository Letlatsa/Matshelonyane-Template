import React from 'react';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

function CreateAccountForm() {
  return (
    <div>
      <Box sx={{}}>
        <FormControl sx={{ width: '100%', color: 'white' }}>
          <Box sx={{ right: '10px !important' }}>
            <Typography sx={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)' }}>
              Welcome to Matshelonyane!
            </Typography>
          </Box>
          <Box sx={{ width: '100%', marginTop: '20px' }}>
            <InputLabel
              id="Account-type"
              sx={{
                marginTop: 4,
                left: '-2%',
                color: 'white',
                '&:hover': {
                  color: 'white'
                }
              }}
            >
              Account type
            </InputLabel>
            <Select
              variant="standard"
              labelId="Account-type"
              id="cars"
              sx={{
                width: '100%',
                color: 'white'
              }}
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
              sx={{
                width: '100%',
                '& input': {
                  color: 'white',
                  borderBottom: ' 3px solid white'
                },
                '& label': {
                  color: 'white'
                },
                '& input:hover': {
                  borderBottom: '1px solid white'
                }
              }}
            />
            <TextField
              variant="standard"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              sx={{
                width: '100%',

                '& input': {
                  color: 'white',
                  borderBottom: ' 3px solid white'
                },
                '& label': {
                  color: 'white'
                }
              }}
            />
            <TextField
              variant="standard"
              label="Confirm Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              sx={{
                width: '100%',

                '& input': {
                  color: 'white',
                  borderBottom: ' 3px solid white'
                },
                '& label': {
                  color: 'white'
                }
              }}
            />
          </Box>
          <Box sx={{ width: '100%', marginTop: '50px' }}>
            <Typography
              sx={{
                color: 'white',
                textAlign: 'center',
                marginTop: '25px',
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
              }}
            >
              Don't have an account?
            </Typography>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
}

export default CreateAccountForm;
