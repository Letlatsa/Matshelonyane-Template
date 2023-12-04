import { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

import { GetPostRequestCustomerEndpoint } from '../../services/EndPoints';

const ClientRequestSummery = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [requests, setRequests] = useState([]);

  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  useEffect(() => {
    // Simulate data loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    getRequests(accessToken);
  }, [accessToken]);

  const getRequests = async (accessToken) => {
    GetPostRequestCustomerEndpoint(accessToken)
      .then((response) => {
        console.log('The requests', response);
        setRequests(response);
      })
      .catch((error) => {
        console.log('Error getting client requests', error);
      });
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
              Summery
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
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            textAlign: 'end',
            height: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            color: '#58362A',
            paddingTop: '5px',
            fontSize: '25px'
          }}
        >
          Job Requests
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'end',
            marginBottom: '40px',
            backgroundColor: '#C69585',
            height: '1px'
          }}
        ></Box>
        {/*TODO: Add map function to display all requests*/}
        {requests.map((request) => (
          <Card key={request._id} sx={styledCard}>
            <Stack spacing={2} sx={styledStack}>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={styledStackTypography}>Cargo Description:</Typography>
                <Typography sx={styledStackTypography}>{request.cargoDescription}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={styledStackTypography}>Pick up Location:</Typography>
                <Typography sx={styledStackTypography}>{request.pickupLocation}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={styledStackTypography}>Drop Off Location:</Typography>
                <Typography sx={styledStackTypography}>{request.dropOffLocation}</Typography>
              </Box>
            </Stack>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default ClientRequestSummery;
