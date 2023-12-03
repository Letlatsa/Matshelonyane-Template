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
import {
  TruckRetrieveEndpoint,
  PostRequestEndpoint,
  LocationRetrieveEndpoint
} from '../../../services/EndPoints';

import DescIcon from '../../../assets/desc.svg';
import TruckIcon from '../../../assets/truck.svg';
import LoadIcon from '../../../assets/load.svg';
import LocationIcon from '../../../assets/location.svg';
import TimeIcon from '../../../assets/time.svg';
import InstructionIcon from '../../../assets/Vector (1).svg';
import PriceIcon from '../../../assets/Vector (2).svg';
import LoadingIcon from '../../../assets/loading.svg';
import theme from '../../../theme/theme';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../../Hooks/TokenContext';
import { useEffect, useState } from 'react';

function ClientJobPostingForm() {
  //Post jobs
  const initialFormState = {
    cargoDescription: '',
    pickupLocation: '',
    dropOffLocation: '',
    pickupTime: '',
    pickupInstructions: '',
    requireLoadingService: true,
    pricePerLoad: ''
  };
  const initialErrorState = {
    cargoDescriptionError: '',
    pickupLocationError: '',
    dropOffLocationError: '',
    pickupTimeError: '',
    pickupInstructionsError: '',
    requireLoadingServiceError: true,
    pricePerLoadError: ''
  };
  const navigate = useNavigate();
  const { tokens } = useToken();
  console.log(tokens, 'I am tokens');

  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);

  const [truckType, setTruckType] = useState([]);
  const [selectedTruckType, setSelectedTruckType] = useState('');
  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  //locations
  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        getLocations(accessToken);
      } catch (error) {
        console.error('Error fetching locations: ', error);
      }
    };

    fetchLocationData();
  }, [accessToken]);

  const getLocations = (accessToken) => {
    LocationRetrieveEndpoint(accessToken)
      .then((locationData) => {
        setLocation(locationData.data);
      })
      .catch((error) => {
        console.log(error, 'Error Fetching Data');
      });
  };

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
    setFormData({ ...formData, deliveryAreaID: selectedLocation });
    console.log('Selected Locatiion:', selectedLocation);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = async () => {
    const accessToken = tokens.accessToken;
    const errors = {};

    const {
      cargoDescription,
      truckTypeID: selectedTruckType,
      deliveryAreaID: selectedLocation,
      pickupLocation,
      dropOffLocation,
      pickupTime,
      pickupInstructions,
      requireLoadingService,
      pricePerLoad
    } = formData;

    if (!cargoDescription) {
      errors.cargoDescriptionError = 'CargoDescription is required';
    }

    // Set the formErrors state with the errors found
    setFormErrors(errors);

    // If there are no errors, proceed with the API request
    if (Object.keys(errors).length === 0) {
      const dataToSend = {
        cargoDescription,
        truckTypeID: selectedTruckType,
        deliveryAreaID: selectedLocation,
        pickupLocation,
        dropOffLocation,
        pickupTime,
        pickupInstructions,
        requireLoadingService,
        pricePerLoad
      };
      console.log('formData before API request:', dataToSend);

      // Perform the API request
      ApiRequest(dataToSend, accessToken);
      console.log('API request', dataToSend);
    }
  };
  const ApiRequest = (formData, accessToken) => {
    PostRequestEndpoint(formData, accessToken)
      .then((response) => {
        if (response && response.status === 200) {
          console.log(response);
          navigate('/clienthome');
        }
      })
      .catch((error) => {
        console.error('Error posting', error);
      });
  };
  /* 
  const ApiRequest = (formData, accessToken) => {
    PostRequestEndpoint(formData, accessToken)
      .then((response) => {
        console.log(response);
        if (response && response.status === 200) {
          navigate('/clienthome');
        }
      })
      .catch((error) => {
        console.log(error);
        console.error('Error posting ', error);
      });
  }; */

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
    console.log('hiiiiiiiiii');
    setFormData({ ...formData, truckTypeID: selectedTruckType });
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
                    type="cargoDescription"
                    name="cargoDescription"
                    onChange={handleInputChange}
                    placeholder="Enter cargo description"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <InputLabel id="truckTypeID" sx={{ color: 'white' }}>
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
                    labelId="truckTypeID"
                    id="truckTypeID"
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
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="location-label" variant="standard" sx={{ color: 'white' }}>
                    <Box sx={accountLabelContainer}>
                      <img
                        src={LocationIcon}
                        alt="Location"
                        width="30"
                        height="20"
                        sx={{ marginRight: '30px' }}
                      />
                      pickup location
                    </Box>
                  </InputLabel>
                  <Select
                    labelId="location-label"
                    id="deliveryAreaID"
                    name="deliveryAreaID"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    variant="standard"
                  >
                    {location.map((locationData) => (
                      <MenuItem key={locationData._id} value={locationData._id}>
                        {locationData.name}
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
                          src={LocationIcon}
                          alt="location"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        pickup location
                      </div>
                    }
                    type="pickupLocation"
                    name="pickupLocation"
                    onChange={handleInputChange}
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
                    type="dropOffLocation"
                    name="dropOffLocation"
                    onChange={handleInputChange}
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
                    type="pickupTime"
                    name="pickupTime"
                    onChange={handleInputChange}
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
                    type="pickupInstructions"
                    name="pickupInstructions"
                    onChange={handleInputChange}
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
                  <Select
                    variant="standard"
                    labelId="loading"
                    id="loading"
                    type="requireLoadingService"
                    onChange={(e) =>
                      setFormData({ ...formData, requireLoadingService: e.target.value === 'true' })
                    }
                    sx={styledSelect}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
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
                    type="pricePerLoad"
                    name="pricePerLoad"
                    onChange={handleInputChange}
                    placeholder="Enter price"
                  />
                </FormControl>
              </Stack>

              <Box sx={buttonContainer}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={styledSubmitButton}
                  onClick={handleButtonClick}
                >
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
