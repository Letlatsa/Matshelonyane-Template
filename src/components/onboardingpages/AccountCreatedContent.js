import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccountCreatedIcon from '../../assets/AccountCreated.svg';

const styledBoxContent = {
  width: { mobile: '90%', tablet: '89%', laptop: '90%', desktop: '90%' },
  minHeight: '100vh'
};
const styledBox = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  marginLeft: '15px'
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
  marginBottom: '200px',
  boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: '#FFEB00'
  },
  marginLeft: '15px'
};

const styledTypography = {
  fontSize: 24,
  textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
  fontWeight: 'bold',
  marginBottom: '25px',
  color: 'white',
  marginLeft: '30px'
};
function AccountCreatedContent() {
  return (
    <div>
      <Box sx={styledBoxContent}>
        <Box sx={styledBox}>
          <img src={AccountCreatedIcon} alt="Account Created" width="100" height="150"></img>
        </Box>
        <Box>
          <Typography sx={{ ...styledTypography, textAlign: 'center' }}>Account Created</Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: 'white',
              textAlign: 'center',
              marginBottom: '50px',
              marginLeft: '15px'
            }}
          >
            Your account has been created successfully.Now, let’s set up your profile.
          </Typography>
        </Box>

        <Button variant="text" color="primary" type="submit" sx={styledSubmitButton}>
          Continue
        </Button>
      </Box>
    </div>
  );
}

export default AccountCreatedContent;
