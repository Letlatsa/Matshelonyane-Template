/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Card,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import TruckerProfileSkeleton from '../../components/skeletons/TruckerProfileSkeleton'; // If you want to add skeleton loading

import BackArrow from '../../assets/backVector.svg';

const ClientTruckerProfile = () => {
  const { truckerId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Dummy data to replace API calls
  const dummyTruckersData = {
    firstName: 'John',
    lastName: 'Doe',
    account: {
      number: '+1234567890'
    }
  };

  const dummyLocation = 'City A';

  const [truckersData, setTruckersData] = useState(dummyTruckersData);
  const [location, setLocation] = useState(dummyLocation);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Simulate data loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const styledProfileBox = {
    borderRadius: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBDBD5',
    padding: 0,
    height: '100px',
    width: '100px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    marginBottom: '15px'
  };

  const styledAppBar = {
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: 'none'
  };

  const styledCard = {
    width: '100%',
    backgroundColor: '#C69585',
    borderRadius: '10px',
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '16px',
    paddingBottom: '16px',
    color: 'white'
  };

  const styledDeviderBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '30px',
    height: '15px'
  };

  const styledStack = {
    width: '100%',
    paddingLeft: '15px',
    paddingRight: '15px'
  };

  const styledStackTypography = {
    color: '#F8F8F8', // Fixed color code
    fontSize: '16px',
    fontWeight: 500
  };

  const handleButtonClicked = () => {
    navigate('/clienthome');
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <Toolbar sx={{ height: '70px' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleButtonClicked}
            >
              <img src={BackArrow} alt="MenuIcon" width="13" height="30" />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textAlign: 'end',
                height: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#58362A',
                fontSize: '32px',
                paddingTop: '5px'
              }}
            >
              Profile
            </Typography>
            <Box
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, width: '30px' }}
            >
              <Box></Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ marginTop: '90px' }}>
        {isLoading ? (
          // Uncomment below and import TruckerProfileSkeleton to use skeleton loading
          //<TruckerProfileSkeleton />
          <Typography>Loading...</Typography>
        ) : (
          <>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '50px'
              }}
            >
              <Box sx={styledProfileBox}>
                <img
                  src={imageData ? `data:image/jpeg;base64,${imageData}` : ''}
                  alt="Trucker Profile"
                  style={{
                    width: '95px',
                    height: '95px',
                    borderRadius: 100,
                    backgroundColor: 'grey'
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: ' #58362A',
                  fontFamily: 'Lato',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: '-0.17px'
                }}
              >
                {truckersData.firstName} {truckersData.lastName}
              </Typography>
            </Box>

            <Box sx={styledDeviderBox}>
              <Box>
                <Typography sx={{ fontSize: '20px' }}>Contact</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '296px' }}></Box>
            </Box>
            <Card sx={styledCard}>
              <Stack spacing={2} sx={styledStack}>
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={styledStackTypography}>Phone number:</Typography>
                  <Typography sx={styledStackTypography}>
                    {truckersData.account.number}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={styledStackTypography}>Operation Location:</Typography>
                  <Typography sx={styledStackTypography}>{location}</Typography>
                </Box>
              </Stack>
            </Card>
          </>
        )}
      </Container>
    </div>
  );
};

export default ClientTruckerProfile;
