import { React, useState } from 'react';
import CardComponent from '../../components/OnboardingComponents/CardComponent';
import { Box, Typography, Button } from '@mui/material';
import LicenceFrame from '../../assets/License Frame1.svg';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import ProgressBar from '../../components/OnboardingComponents/ProgressBar';
import { useToken } from '../../Hooks/TokenContext';
import { UpdateDriverLicenseEndPoint } from '../../services/EndPoints';
import theme from '../../theme/theme';

const OnboardingLicense = () => {
  const { tokens } = useToken();
  const [currentStep] = useState(2);
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
    //const formData = new FormData();
    //const accessToken = tokens.accessToken;
    //const user = sessionStorage.getItem('user');
   // const profileId = JSON.parse(user)._id;

   /* if (imageSrc) {
      formData.append('profileId', profileId);
      formData.append('file', file);

      //ApiRequest(formData, accessToken);
    }*/
    navigate('/truckonboardingprofile');
  };

 /* const ApiRequest = (formData, accessToken) => {
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
  };*/

  const styledButton = {
    height: '50px',
    marginBottom: '50px',
    backgroundColor: theme.palette.primary.main,
  };
  const styledButtonone = {
    height: '50px',
    marginBottom: '50px'
  };

  const styledHeaingTypography = {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '50px'
  };

  const styledTypography = {
    marginTop: '15px',
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
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <div className="Login-container">
      <CardComponent>
        <Box>
          <ProgressBar currentStep={currentStep} />
        </Box>
        <Box className="LiceneceBox" sx={{ marginTop: '50px' }}>
          <Typography variant='h1' sx={styledHeaingTypography}>Let’s verify your drivers license</Typography>

          <Box sx={styledBox}>
            <label
              htmlFor="license-upload"
              style={{
                maxWidth: '330px',
                objectFit: 'cover',
                width: '90vw',
                maxHeight: '200px',
                height: '200px',
                overflowY: 'none'
              }}
            >
              {imageSrc ? (
                <img src={imageSrc} alt="License" style={styledImage} />
              ) : (
                <img src={LicenceFrame} alt="License" style={styledImage} />
              )}
            </label>
            <Typography variant='h4' sx={styledTypography}>
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
            <Button variant="contained" sx={styledButton}>
              Upload Picture
            </Button>
            <Button variant="contained" sx={styledButtonone} onClick={handleButtonClick}>
              Proceed
            </Button>
          </Box>
        </Box>
      </CardComponent>
    </div>
  );
};

export default OnboardingLicense;
