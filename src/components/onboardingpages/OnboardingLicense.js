import React, { useState } from 'react';
import CardComponent from '../../components/onboardingpages/CardComponent';
import { Box, Typography, Button } from '@mui/material';
import LicenceFrame from '../../assets/License Frame1.svg';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import ProgressBar from './ProgressBar';

const OnboardingLicense = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [imageSrc, setImageSrc] = useState(LicenceFrame);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      navigate('/truckonboardingprofile');
    }
  };

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(uploadedImage);
    setImageSrc(imageUrl);
  };

  const styledButton = {
    fontSize: 18,
    backgroundColor: '#FDB299',
    width: '100%',
    borderRadius: '15px',
    height: '50px',
    color: '#000000',
    fontWeight: '400',
    textTransform: 'none',
    marginBottom: '50px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  };

  const styledButtonone = {
    fontSize: 18,
    backgroundColor: '#EBDBD5',
    width: '100%',
    borderRadius: '15px',
    height: '50px',
    color: '#000000',
    fontWeight: '400',
    textTransform: 'none',
    marginBottom: '50px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  };

  const styledHeaingTypography = {
    fontSize: 20,
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '50px'
  };

  const styledTypography = {
    marginTop: '15px',
    fontSize: 16,
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    color: '#ffffff',
    textAlign: 'center'
  };

  const styledBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px'
  };

  const styledImage = {
    marginBottom: '30px',
    width: '100%',
    maxHeight: '100px',
    maxWidth: '100%'
  };

  return (
    <div className="Login-container">
      <CardComponent>
        <Box>
          <ProgressBar currentStep={currentStep} />
        </Box>
        <Box className="LiceneceBox" sx={{ marginTop: '50px' }}>
          <Typography sx={styledHeaingTypography}>Let’s verify your driver's license</Typography>
          <Box sx={styledBox}>
            <img src={imageSrc} alt="License" sx={styledImage} />
            <Typography sx={styledTypography}>
              Upload a legible picture of your driver's license to verify your info
            </Typography>
          </Box>
          <Box sx={styledBox}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button variant="text" component="span" sx={styledButton}>
                Upload Picture
              </Button>
            </label>
            <Button variant="text" sx={styledButtonone} onClick={handleButtonClick}>
              Proceed
            </Button>
          </Box>
        </Box>
      </CardComponent>
    </div>
  );
};

export default OnboardingLicense;
