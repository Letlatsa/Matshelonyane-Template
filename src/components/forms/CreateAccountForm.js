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
function CreateAccountForm() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };
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
            <Button
              variant="text"
              color="primary"
              type="submit"
              sx={{
                fontSize: 18,
                backgroundColor: '#FFEB22',
                width: '100%',
                borderRadius: '15px',
                height: '50px',
                color: '#000000',
                fontWeight: '600',
                textTransform: 'none',
                boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
              }}
              onClick={handleButtonClick}
            >
              Sign Up
            </Button>
            <Typography
              sx={{
                color: 'white',
                textAlign: 'center',
                marginTop: '25px',
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
              }}
            >
              Already have an account?
            </Typography>

            <Button
              variant="text"
              sx={{
                color: '#FFEB22',
                marginTop: '25px',
                left: 250,
                textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
              }}
              onClick={handleButtonClick}
            >
              Login
            </Button>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
}

export default CreateAccountForm;
