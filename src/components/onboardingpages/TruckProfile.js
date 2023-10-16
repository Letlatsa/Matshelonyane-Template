import React from 'react';
import { Avatar } from '@mui/material';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import TruckAvatarIcon from '../../assets/TruckAvatar.svg';
import AccountIcon from '../../assets/account.svg';
import WeightIcon from '../../assets/weight.svg';
import TruckIcon from '../../assets/truck.svg';
import { useNavigate } from 'react-router-dom';

const styledFormControl = {
  width: '100%',
  color: 'white'
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
const accountLabelContainer = {
  display: 'flex',
  alignItems: 'center'
};

function TruckProfile() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/truckprofilecomplete');
  };
  const styledAvatarBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <div>
      <Box sx={{ width: '100%', marginRight: '50px', left: '50px' }}>
        <Typography
          sx={{
            fontSize: 24,
            color: 'white',
            textAlign: 'center',
            marginBottom: '15px',
            marginLeft: '15px',
            textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
            fontWeight: 'bold',
            marginTop: '50px'
          }}
        >
          Fleet setup
        </Typography>
        <Box sx={styledAvatarBox}>
          <Avatar alt="TruckerAvatar" src={TruckAvatarIcon} sx={{ width: 100, height: 100 }} />
        </Box>
        <Typography
          sx={{
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px',
            marginLeft: '15px'
          }}
        >
          Upload a picture of your truck
        </Typography>
        <Box>
          <FormControl sx={styledFormControl}>
            <Box sx={inputContainerBox}>
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Plate Number"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Plate Number
                  </div>
                }
                type="Plate Number"
                name="Plate Number"
                placeholder="Enter your plate number"
                sx={styledTextField}
              />
              <Box sx={inputContainerBox}>
                <InputLabel id="Truck-type" sx={styledInputLabel}>
                  <Box sx={accountLabelContainer}>
                    <img
                      src={TruckIcon}
                      alt="Truck-type"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    <box>Truck-type</box>
                  </Box>
                </InputLabel>
                <Select variant="standard" labelId="Truck-type" id="cars" sx={styledSelect}>
                  <MenuItem value="Client">Type 1</MenuItem>
                  <MenuItem value="Driver">Type 2</MenuItem>
                </Select>
              </Box>

              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={WeightIcon}
                      alt="Tonnage"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Weight
                  </div>
                }
                type="Tonnage"
                name="Tonnage"
                placeholder="Enter your Truck Tonnage"
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
                Proceed
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
}

export default TruckProfile;
