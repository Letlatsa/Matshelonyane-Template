import { React, useState } from 'react';
import { Avatar } from '@mui/material';
import { Box, FormControl, TextField, Typography, Button } from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import PhoneIcon from '../../assets/phone.svg';
import UploadIcon from '../../assets/upload.svg';
import LocationIcon from '../../assets/location.svg';
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

function TruckerProfile() {
  const [avatarImage, setAvatarImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

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
  const handleButtonClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      navigate('/onboardinglicense');
    }
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
  return (
    <div>
      <Box>
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
          Let’s us get to know you
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
          Upload your profile picture
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
                      alt="Account"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    First name
                  </div>
                }
                type="Account"
                name="Account"
                placeholder="Enter your First Name"
                sx={styledTextField}
              />
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Lastname"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Last name
                  </div>
                }
                type="Lastname"
                name="Lastname"
                placeholder="Enter your Last name"
                sx={styledTextField}
              />
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={PhoneIcon}
                      alt="Phone"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Phone Number
                  </div>
                }
                type="phone"
                name="phone"
                placeholder="Enter your phone number"
                sx={styledTextField}
              />

              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={LocationIcon}
                      alt="Location"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Delivery Area
                  </div>
                }
                type="Location"
                name="Location"
                placeholder="Enter your Location"
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

export default TruckerProfile;
