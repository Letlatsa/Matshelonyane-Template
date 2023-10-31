import { React, useState } from 'react';
import CardComponent from '../../components/onboardingpages/CardComponent';
import { Box, Typography, Button } from '@mui/material';
import LicenceFrame from '../../assets/License Frame1.svg';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import ProgressBar from './ProgressBar';
import { useToken } from '../../Hooks/TokenContext';
import { UpdateDriverLicenseEndPoint } from '../../services/EndPoints';

const OnboardingLicense = () => {
  const { tokens } = useToken();
  const [currentStep, setCurrentStep] = useState(1);
  const [imageSrc, setImageSrc] = useState(null);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const reader = new FileReader();

      setFile(file);

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      // Handle the case where no files are selected, e.target is undefined, or files array is empty.
      // You can provide appropriate feedback to the user or take other actions as needed.
    }
  };

  const handleButtonClick = () => {
    const formData = new FormData();
    const accessToken = tokens.accessToken;

    if (imageSrc) {
      formData.append('file', file);

      ApiRequest(formData, accessToken);
    }
  };

  const ApiRequest = (formData, accessToken) => {
    UpdateDriverLicenseEndPoint(formData, accessToken)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate('/truckonboardingprofile');
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
    width: '100%'
  };

  return (
    <div className="Login-container">
      <CardComponent>
        <Box>
          <ProgressBar currentStep={currentStep} />
        </Box>
        <Box className="LiceneceBox" sx={{ marginTop: '50px' }}>
          <Typography sx={styledHeaingTypography}>Let’s verify your drivers license</Typography>

          <Box sx={styledBox}>
            <label htmlFor="license-upload" style={{ maxWidth: '320px', objectFit: 'cover' }}>
              {imageSrc ? (
                <img src={imageSrc} alt="License" style={styledImage} />
              ) : (
                <img src={LicenceFrame} alt="License" style={styledImage} />
              )}
            </label>
            <Typography sx={styledTypography}>
              Upload a legible picture of your drivers license to verify your info
            </Typography>
          </Box>

          <Box sx={styledBox}>
            <input
              type="file"
              accept="image/*"
              id="license-upload"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <Button variant="text" sx={styledButton}>
              Upload Picture
            </Button>
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
