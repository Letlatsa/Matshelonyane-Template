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
import { TruckRetrieveEndpoint } from '../../../services/EndPoints';

import DescIcon from '../../../assets/desc.svg';
import TruckIcon from '../../../assets/truck.svg';
import LoadIcon from '../../../assets/load.svg';
import LocationIcon from '../../../assets/location.svg';
import TimeIcon from '../../../assets/time.svg';
import InstructionIcon from '../../../assets/Vector (1).svg';
import PriceIcon from '../../../assets/Vector (2).svg';
import LoadingIcon from '../../../assets/loading.svg';
import theme from '../../../theme/theme';

import { useEffect, useState } from 'react';

function ClientJobPostingForm() {
  const [truckType, setTruckType] = useState([]);
  const [selectedTruckType, setSelectedTruckType] = useState([]);
  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  useEffect(() => {
    const fetchTruckData = async () => {
      try {
        getTruckTypes(accessToken);
      } catch (error) {
        console.error('Error fetching truck types: ', error);
      }
    };

    fetchTruckData();
  }, [accessToken]);

  const getTruckTypes = (accessToken) => {
    TruckRetrieveEndpoint(accessToken)
      .then((truckData) => {
        setTruckType(truckData.data);
      })
      .catch((error) => {
        console.log(error, 'Error Fetching Data');
      });
  };

  const handleTrucktypeChange = async (event) => {
    const selectedTruckType = event.target.value;
    setSelectedTruckType(selectedTruckType);
    console.log('Selected Truck Type:', selectedTruckType);
  };

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
    width: '100%',
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
    <Box sx={{ flexGrow: 1 }}>
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
                          src={DescIcon}
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
                        src={TruckIcon}
                        alt="trucktype"
                        width="30"
                        height="20"
                        sx={{ marginRight: '25px' }}
                      />
                      <Box>required truck type</Box>
                    </Box>
                  </InputLabel>
                  <Select
                    variant="standard"
                    labelId="truckType"
                    id="truckType"
                    onChange={handleTrucktypeChange}
                    value={selectedTruckType}
                    sx={styledSelect}
                  >
                    {truckType.map((truckData) => (
                      <MenuItem key={truckData._id} value={truckData._id}>
                        {truckData.name}
                      </MenuItem>
                    ))}
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
                          src={LoadIcon}
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
                          src={LocationIcon}
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
                          src={LocationIcon}
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
                          src={TimeIcon}
                          alt="time"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        pick-up time
                      </div>
                    }
                    type="times"
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
                          src={InstructionIcon}
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
                        src={LoadingIcon}
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
                          src={PriceIcon}
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
    </Box>
  );
}

export default ClientJobPostingForm;
