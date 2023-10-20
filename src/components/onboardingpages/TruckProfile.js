import { React, useState } from 'react';
import { Avatar } from '@mui/material';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import WeightIcon from '../../assets/weight.svg';
import TruckIcon from '../../assets/truck.svg';
import UploadIcon from '../../assets/upload.svg';
import ProgressBar from './ProgressBar';
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
  backgroundColor: '#EBDBD5',
  width: '100%',
  borderRadius: '15px',
  height: '50px',
  color: '#58362A',
  fontWeight: '400',
  textTransform: 'none',
  marginBottom: '30px',
  boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: 'transparent'
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
const styledAvatarBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
};
const uploadIconStyle = {
  position: 'absolute',
  right: '100px',
  bottom: '0px',
  cursor: 'pointer'
};
// eslint-disable-next-line no-unused-vars
const styledHelperText = {
  color: 'red',
  marginRight: '150px'
};

function TruckProfile() {
  const initialFormState = {
    plateNumber: '',
    truckType: '',
    weightCapacity: ''
  };
  const initialErrorState = {
    plateNumberError: '',
    truckTypeError: '',
    weightCapacityError: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [avatarImage, setAvatarImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [truckType, setTruckType] = useState();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    const { plateNumber, weightCapacity } = formData;
    const errors = {};

    if (!plateNumber) {
      errors.plateNumberError = 'PlateNumber  is required';
    }

    if (!truckType) {
      errors.truckTypeError = 'TruckType is required';
    }
    if (!weightCapacity) {
      errors.weightCapacityError = 'Weight Capacity is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Success');
      navigate('/truckprofilecomplete');
    }
  };

  const handleTrucktypeChange = (event) => {
    setTruckType(event.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleButtonClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      navigate('/truckprofilecomplete');
    }
  };

  return (
    <div>
      <Box sx={{ width: '100%', marginRight: '50px', left: '50px' }}>
        <Box>
          <ProgressBar currentStep={currentStep} />
        </Box>
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
        <input
          type="file"
          accept="image/*"
          id="avatar-upload"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="avatar-upload">
          <Box sx={styledAvatarBox}>
            {avatarImage ? (
              <Avatar alt="User Avatar" src={avatarImage} sx={{ width: 100, height: 100 }} />
            ) : (
              <Avatar alt="User Avatar" sx={{ width: 100, height: 100 }}></Avatar>
            )}
            <Box style={uploadIconStyle}>
              <img src={UploadIcon} alt="Account" width="30" height="20" />
            </Box>
          </Box>
        </label>
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
                type="plateNumber"
                name="plateNumber"
                placeholder="Enter your plate number"
                sx={styledTextField}
                value={formData.plateNumber}
                onChange={handleInputChange}
                error={!!formErrors.plateNumberError}
                helperText={formErrors.plateNumberError}
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
                    <Box>Truck-type</Box>
                  </Box>
                </InputLabel>
                <Select
                  variant="standard"
                  labelId="Truck-type"
                  id="truckType"
                  sx={styledSelect}
                  value={truckType}
                  onChange={handleTrucktypeChange}
                  error={!!formErrors.truckTypeError}
                >
                  <MenuItem value="Client">Type 1</MenuItem>
                  <MenuItem value="Driver">Type 2</MenuItem>
                </Select>
                {/* <FormHelperText sx={styledHelperText}>{formErrors.truckTypeError}</FormHelperText> */}
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
                    Weight Capacity
                  </div>
                }
                type="weightCapacity"
                name="weightCapacity"
                placeholder="Enter your Truck weight capacity"
                sx={styledTextField}
                value={formData.weightCapacity}
                onChange={handleInputChange}
                error={!!formErrors.weightCapacityError}
                helperText={formErrors.weightCapacityError}
              />
            </Box>
            <Box>
              <Button
                variant="text"
                color="primary"
                type="submit"
                sx={styledSubmitButton}
                onClick={validateForm}
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
