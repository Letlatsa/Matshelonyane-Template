import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import BackArrow from '../../assets/backVector.svg';
import TruckCard from '../../components/HomeComponents/Trucker/TruckCard';
import TruckerProfileSkeleton from '../../components/skeletons/TruckerProfileViewSkeleton';

// Placeholder data for static display
const placeholderTrucks = [
  { _id: '1', model: 'Truck Model 1', details: 'Details about Truck 1' },
  { _id: '2', model: 'Truck Model 2', details: 'Details about Truck 2' }
];

const placeholderProfilePic = 'https://via.placeholder.com/95';
const placeholderUserData = {
  firstName: 'John',
  lastName: 'Doe',
  propic: placeholderProfilePic,
  deliveryArea: 'New York',
  account: {
    _id: '123',
    number: '555-1234'
  }
};

const TruckerProfileView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trucks, setTrucks] = useState(placeholderTrucks);
  const [profilePic, setProfilePic] = useState(placeholderProfilePic);
  const [location, setLocation] = useState(placeholderUserData.deliveryArea);

  const { firstName, lastName, propic, account } = placeholderUserData;

  useEffect(() => {
    // Simulate data loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClicked = () => {
    console.log('Back button clicked');
    // Handle navigation if necessary
  };

  const handleEditButtonClicked = () => {
    console.log('Edit button clicked');
    // Handle navigation if necessary
  };

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
    color: 'F8F8F8',
    fontSize: '16px',
    fontWeight: 500
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
        {isLoading ? ( // Check if data is loading, if true, show the skeleton
          <TruckerProfileSkeleton />
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
                  src={profilePic}
                  alt=""
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
                {firstName} {lastName}
              </Typography>
              <Typography
                sx={{
                  color: '#C69585',
                  fontFamily: 'Lato',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: '-0.17px',
                  marginBottom: '15px'
                }}
              >
                {location}
              </Typography>
              <Button
                variant="text"
                sx={{
                  backgroundColor: '#EBDBD5',
                  textColor: '#58362A',
                  width: '196px',
                  borderRadius: '15px',
                  height: '50px',
                  color: '#58362A',
                  fontWeight: '300',
                  fontSize: '20px',
                  textTransform: 'none',
                  boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: '#58362A',
                    color: 'white',
                    transition: 'ease-in .3s'
                  }
                }}
                onClick={handleEditButtonClicked}
              >
                Edit
              </Button>
            </Box>

            <Box sx={styledDeviderBox}>
              <Box>
                <Typography sx={{ fontSize: '20px' }}>Contact</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#58362A', height: '.2px', width: '66vw' }}></Box>
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
                  <Typography sx={styledStackTypography}> {account.number}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={styledStackTypography}>Location:</Typography>
                  <Typography sx={styledStackTypography}>{location}</Typography>
                </Box>
              </Stack>
            </Card>
            <Box sx={styledDeviderBox}>
              <Box>
                <Typography sx={{ fontSize: '20px' }}>Fleet</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#58362A', height: '.2px', width: '75vw' }}></Box>
            </Box>
            <Box
              sx={{ display: 'flex', width: '100%', justifyContent: 'end', marginBottom: '20px' }}
            ></Box>
            {trucks?.map((truck) => (
              <TruckCard key={truck._id} truck={truck} />
            ))}
          </>
        )}
      </Container>
    </div>
  );
};

export default TruckerProfileView;
