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
import BackArrow from '../../assets/backVector.svg';
import '../../styles/ClientTruckerProfile.css';

const ClientTruckerProfile = () => {
  const { truckerId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

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
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClicked = () => {
    navigate('/clienthome');
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className="appBar">
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
            <Box size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, width: '30px' }}>
              <Box></Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ marginTop: '90px' }}>
        {isLoading ? (
          <Typography className="loadingText">Loading...</Typography>
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
              <Box className="profileBox">
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
              <Typography className="profileTypography">
                {truckersData.firstName} {truckersData.lastName}
              </Typography>
            </Box>

            <Box className="deviderBox">
              <Box>
                <Typography sx={{ fontSize: '20px' }}>Contact</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '296px' }}></Box>
            </Box>
            <Card className="card">
              <Stack spacing={2} className="stack">
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography className="stackTypography">Phone number:</Typography>
                  <Typography className="stackTypography">
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
                  <Typography className="stackTypography">Operation Location:</Typography>
                  <Typography className="stackTypography">{location}</Typography>
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
