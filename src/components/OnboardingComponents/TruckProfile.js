import React, { useState } from 'react';
import { Avatar, Stack, Box, FormControl, TextField, Typography, Button, InputLabel, Select, MenuItem } from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import WeightIcon from '../../assets/weight.svg';
import TruckIcon from '../../assets/truck.svg';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme/theme';

function TruckProfile() {
  const initialFormState = {
    platNumber: '',
    truckType: '',
    maxLoadCapacity: ''
  };

  const initialErrorState = {
    platNumberError: '',
    truckTypeError: '',
    maxLoadCapacityError: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const [file, setFile] = useState(null);
  const [truckTypes, setTruckTypes] = useState([
    { _id: '1', name: 'Flatbed Truck' },
    { _id: '2', name: 'Box Truck' },
    { _id: '3', name: 'Refrigerated Truck' },
    { _id: '4', name: 'Tanker Truck' },
    { _id: '5', name: 'Dump Truck' }
  ]);
  const [selectedTruckType, setSelectedTruckType] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTruckTypeChange = (event) => {
    setSelectedTruckType(event.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const validateForm = () => {
    const { platNumber, maxLoadCapacity } = formData;
    const errors = {};

    if (!platNumber) {
      errors.platNumberError = 'Plate number is required';
    } else if (!/^[A-Z]\s\d{3}\s[A-Z]{3}$/.test(platNumber)) {
      errors.platNumberError = 'Plate number must follow the format B 123 ABC';
    }

    if (!maxLoadCapacity) {
      errors.maxLoadCapacityError = 'Weight Capacity is required';
    }

    setFormErrors(errors);

    /*if (Object.keys(errors).length === 0) {
      const truckData = new FormData();
      truckData.append('platNumber', formData.platNumber);
      truckData.append('truckType', selectedTruckType);
      truckData.append('maxLoadCapacity', formData.maxLoadCapacity);
      truckData.append('file', file);

      // Here you would normally call an API endpoint to register the truck
      //console.log('Truck Data:', truckData);
      navigate('/truckprofilecomplete');
    }*/
    navigate('/truckprofilecomplete')
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <ProgressBar currentStep={currentStep} />
        <Typography
          variant="h1"
          sx={{ color: theme.palette.primary.main, textAlign: 'center', marginBottom: '15px', marginTop: '20px' }}
        >
          Fleet Setup
        </Typography>
        <input
          type="file"
          accept="image/*"
          id="truckPic"
          name="truckPic"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="truckPic">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '30px'
            }}
          >
            <Avatar
              alt="Truck Avatar"
              src={avatarImage}
              sx={{ width: 130, height: 130, borderRadius: '10px' }}
            />
          </Box>
        </label>
        <Typography
          variant="h4"
          sx={{ color: theme.palette.primary.main, textAlign: 'center', marginBottom: '50px' }}
        >
          Upload a picture of your truck
        </Typography>
        <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
          <FormControl sx={{ width: '90%', maxWidth: '500px' }}>
            <TextField
              variant="standard"
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={AccountIcon} alt="Plate Number" width="30" height="20" style={{ marginRight: '10px' }} />
                  Plate Number
                </div>
              }
              type="text"
              name="platNumber"
              placeholder="Enter your plate number"
              value={formData.platNumber}
              onChange={handleInputChange}
              error={!!formErrors.platNumberError}
              helperText={formErrors.platNumberError}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ width: '90%', maxWidth: '500px' }}>
            <InputLabel id="truckType" sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={TruckIcon} alt="Truck Type" width="30" height="20" style={{ marginRight: '10px' }} />
              Truck Type
            </InputLabel>
            <Select
              labelId="truckType"
              id="truckType"
              value={selectedTruckType}
              onChange={handleTruckTypeChange}
              sx={{ width: '100%' }}
            >
              {truckTypes.map((type) => (
                <MenuItem key={type._id} value={type._id}>
                  {type.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: '90%', maxWidth: '500px' }}>
            <TextField
              variant="standard"
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={WeightIcon} alt="Weight Capacity" width="30" height="20" style={{ marginRight: '10px' }} />
                  Weight Capacity
                </div>
              }
              type="text"
              name="maxLoadCapacity"
              placeholder="Enter your truck's weight capacity"
              value={formData.maxLoadCapacity}
              onChange={handleInputChange}
              error={!!formErrors.maxLoadCapacityError}
              helperText={formErrors.maxLoadCapacityError}
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            sx={{ height: '50px', marginTop: '30px', width: '90%', maxWidth: '500px' }}
            onClick={validateForm}
          >
            Proceed
          </Button>
          <Typography
            variant="h4"
            sx={{ color: theme.palette.primary.main, textAlign: 'center', marginTop: '20px' }}
          >
            You can add more trucks to your fleet later in the settings page
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default TruckProfile;