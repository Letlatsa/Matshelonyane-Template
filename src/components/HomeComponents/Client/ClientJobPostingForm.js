import React from 'react';
import {
  Box,
  Card,
  Stack,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import PhoneIcon from '../../../assets/phone.svg';
import theme from '../../../theme/theme';

function ClientJobPostingForm() {
  const styledCard = {
    width: 'calc(100% - 50px)',
    maxWidth: '380px',
    height: '572px',
    backgroundColor: '#C69585',
    borderRadius: '10px',
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '150px',
    color: 'white',
    gap: '15px',
    flexShrink: 0,
    overflowY: 'auto'
  };

  const inputContainer = {
    width: '90%',
    marginBottom: '15px',
    padding: '0 20px',
    alignItems: 'center'
  };

  const styledSubmitButton = {
    height: '50px',
    width: '90%',
    marginBottom: '30px',
    marginTop: '15px'
  };
  const containerStyle = {
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  };

  const styledTypography = {
    alignItems: 'center',
    color: theme.palette.secondary.main
  };
  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };
  const styledSelect = {
    width: '100%',
    borderBottom: ' 1px solid white',
    color: 'white'
  };
  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          ...styledTypography,
          position: 'absolute',
          top: '120px',
          left: '25%',
          fontSize: '24px',
          transform: 'translateX(-50%)'
        }}
      >
        Request pickup
      </Typography>
      <Box sx={containerStyle}>
        <Card sx={styledCard}>
          <div>
            <Box sx={{ marginTop: '20px', color: 'white' }}>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PhoneIcon}
                          alt="cargo"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        cargo description
                      </div>
                    }
                    type="cargo"
                    name="cargo"
                    placeholder="Enter cargo description"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <InputLabel id="Account-type" sx={{ color: 'white' }}>
                    <Box sx={accountLabelContainer}>
                      <img
                        src={PhoneIcon}
                        alt="trucktype"
                        width="30"
                        height="20"
                        sx={{ marginRight: '30px' }}
                      />
                      <Box>required truck type</Box>
                    </Box>
                  </InputLabel>
                  <Select
                    variant="standard"
                    labelId="truck-type"
                    id="account-type"
                    sx={styledSelect}
                  >
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">medium</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PhoneIcon}
                          alt="weight"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        cargo weight
                      </div>
                    }
                    type="weight"
                    name="weight"
                    placeholder="Enter weight"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PhoneIcon}
                          alt="location"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        pickup location
                      </div>
                    }
                    type="location"
                    name="location"
                    placeholder="Enter location"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PhoneIcon}
                          alt="dropoff"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        dropoff location
                      </div>
                    }
                    type="location"
                    name="location"
                    placeholder="Enter location"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PhoneIcon}
                          alt="time"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        pick-up time
                      </div>
                    }
                    type="time"
                    name="time"
                    placeholder="Enter time"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PhoneIcon}
                          alt="instructions"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        Pick-up instrcutions
                      </div>
                    }
                    type="instructions"
                    name="instructions"
                    placeholder="Enter instructions"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <InputLabel id="loading" sx={{ color: 'white' }}>
                    <Box sx={accountLabelContainer}>
                      <img
                        src={PhoneIcon}
                        alt="loading"
                        width="30"
                        height="20"
                        sx={{ marginRight: '30px' }}
                      />
                      <Box>loading & offloading service</Box>
                    </Box>
                  </InputLabel>
                  <Select variant="standard" labelId="loading" id="loading" sx={styledSelect}>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">no</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PhoneIcon}
                          alt="Price"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        price per load
                      </div>
                    }
                    type="price"
                    name="price"
                    placeholder="Enter price"
                  />
                </FormControl>
              </Stack>

              <Box sx={buttonContainer}>
                <Button variant="contained" type="submit" sx={styledSubmitButton}>
                  Post Request
                </Button>
              </Box>
            </Box>
          </div>
        </Card>
      </Box>
    </div>
  );
}

export default ClientJobPostingForm;
