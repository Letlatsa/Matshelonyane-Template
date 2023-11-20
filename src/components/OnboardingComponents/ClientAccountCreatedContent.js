import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccountCreatedIcon from '../../assets/AccountCreated.svg';
import { useNavigate } from 'react-router-dom';

const styledBoxContent = {
  width: '100%',
  minHeight: '100vh'
};
const styledBox = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  marginBottom: '10vh'
};

const styledSubmitButton = {
  height: '50px'
};

const styledTypography = {
  marginBottom: '25px',
  color: 'white',
};
function ClientAccountCreatedContent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/clientonboardingprofile');
  };
  return (
    <div>
      <Box sx={styledBoxContent}>
        <Box sx={styledBox}>
          <img src={AccountCreatedIcon} alt="Account Created" width="100" height="150"></img>
        </Box>
        <Box>
          <Typography variant='h1' sx={{ ...styledTypography, textAlign: 'center' }}>Account Created</Typography>
          <Typography
          variant='h5'
            sx={{
              color: 'white',
              textAlign: 'center',
              marginBottom: '20vh'
            }}
          >
            Your account has been created successfully.Now, let’s set up your profile.
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={styledSubmitButton}
          onClick={handleButtonClick}
        >
          Continue
        </Button>
      </Box>
    </div>
  );
}

export default ClientAccountCreatedContent;
