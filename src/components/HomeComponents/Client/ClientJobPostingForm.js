import {
  Box,
  Card,
  Stack,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Import icons (keep these since they are local assets)
import DescIcon from '../../../assets/desc.svg';
import TruckIcon from '../../../assets/truck.svg';
import LocationIcon from '../../../assets/location.svg';
import TimeIcon from '../../../assets/time.svg';
import InstructionIcon from '../../../assets/Vector (1).svg';
import PriceIcon from '../../../assets/Vector (2).svg';
import LoadingIcon from '../../../assets/loading.svg';

function ClientJobPostingForm() {
  const initialFormState = {
    cargoDescription: '',
    pickupLocation: '',
    dropOffLocation: '',
    pickupTime: '',
    pickupInstructions: '',
    requireLoadingService: true,
    pricePerLoad: ''
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormState);
  const [selectedTruckType, setSelectedTruckType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = () => {
    // Just log the formData in the console for now
    console.log('formData before submission:', formData);
    // Navigate to another route after submission (optional)
    navigate('/clienthome');
  };

  const handleTrucktypeChange = (event) => {
    const selectedTruckType = event.target.value;
    setSelectedTruckType(selectedTruckType);
    setFormData({ ...formData, truckTypeID: selectedTruckType });
  };

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
    setFormData({ ...formData, deliveryAreaID: selectedLocation });
  };

  // Styling
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
                    {/* Placeholder truck types for demonstration */}
                    <MenuItem value="truckType1">Truck Type 1</MenuItem>
                    <MenuItem value="truckType2">Truck Type 2</MenuItem>
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
                      deliveryArea
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
                    {/* Placeholder locations for demonstration */}
                    <MenuItem value="location1">Location 1</MenuItem>
                    <MenuItem value="location2">Location 2</MenuItem>
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
                          alt="dropoff"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        pickuplocation
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
                      <Box>Require Loading Service</Box>
                    </Box>
                  </InputLabel>
                  <Select
                    variant="standard"
                    labelId="loading"
                    id="loading"
                    name="requireLoadingService"
                    value={formData.requireLoadingService}
                    onChange={handleInputChange}
                    sx={styledSelect}
                  >
                    {/* Placeholder options for demonstration */}
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
                          alt="price"
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
            </Box>
          </div>
          <Box sx={buttonContainer}>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={styledSubmitButton}
            >
              submit request
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default ClientJobPostingForm;
