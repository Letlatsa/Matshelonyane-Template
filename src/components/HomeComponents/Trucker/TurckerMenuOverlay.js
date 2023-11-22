import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from '@mui/material';
import BackArrow from '../../../assets/backVectorWhite.svg';
import AccountIcon from '../../../assets/account.svg';
import RightArrow from '../../../assets/rightVectorArrow.svg';
import LocationPin from '../../../assets/circum_location-on1.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LocationRetrieveEndpoint } from '../../../services/EndPoints';

const MenuOverlay = ({ isOverlay, setIsOverlay }) => {
  const navigate = useNavigate();

  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        getLocations(accessToken);
      } catch (error) {
        console.error('Error fetching locations: ', error);
      }
    };

    fetchLocationData();
  }, [accessToken]);

  const getLocations = (accessToken) => {
    LocationRetrieveEndpoint(accessToken)
      .then((locationData) => {
        setLocation(locationData.data);
      })
      .catch((error) => {
        console.log(error, 'Error Fetching Data');
      });
  };

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
    console.log('Selected Locatiion:', selectedLocation);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleButtonBackArrowClicked = () => {
    setIsOverlay(false);
  };

  const handleEditProfile = () => {
    navigate('/truckereditprofile');
  };

  const styledAppBar = {
    background: 'transparent',
    boxShadow: 'none'
  };

  const styledStackTypography = {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500
  };

  const overlayStyles = {
    background: 'rgba(198, 149, 133, 0.70)',
    backdropFilter: 'blur(40px)',
    height: '100vh',
    position: 'absolute',
    width: '100%',
    transition: 'ease .5s',
    transform: 'translateX(-200%)'
  };

  const openOverlayStyles = {
    background: 'rgba(198, 149, 133, 0.70)',
    backdropFilter: "blur('40px')",
    height: '100vh',
    position: 'absolute',
    width: '100%',
    transition: 'ease .5s',
    transform: 'translateX(0)',
    zIndex: 1000,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { width: '0.4em' },
    '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' }
  };

  const styleListItemBox = {
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    color: '#FFF',
    alignItems: 'center'
  };

  const settingSectionText = {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 600
  };

  return (
    <div style={isOverlay ? openOverlayStyles : overlayStyles}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <Toolbar sx={{ height: '70px' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleButtonBackArrowClicked}
            >
              <img src={BackArrow} alt="MenuIcon" width="13" height="30" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ paddingTop: '80px' }}>
        <Typography
          sx={{
            color: '#f8f8f8',
            fontSize: '24px',
            marginBottom: '30px',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Settings
        </Typography>
        <Box sx={{ marginBottom: '50px' }}>
          <Box
            sx={{
              borderBottom: 'solid 1px white',
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              marginBottom: '25px',
              color: 'white'
            }}
          >
            <img
              src={AccountIcon}
              alt="Account Icon"
              width="20"
              height="20"
              style={{
                marginRight: '20px'
              }}
            />
            <Typography sx={settingSectionText}>Account</Typography>
          </Box>
          <Stack spacing={2}>
            <Box sx={styleListItemBox} onClick={handleEditProfile}>
              <Typography sx={styledStackTypography}>Edit profile</Typography>
              <img src={RightArrow} alt="MenuIcon" width="15" height="30" />
            </Box>
            <Box sx={styleListItemBox}>
              <Typography sx={styledStackTypography}>Change password</Typography>
              <img src={RightArrow} alt="MenuIcon" width="15" height="30" />
            </Box>
          </Stack>
        </Box>
        <Box sx={{ marginBottom: '50px' }}>
          <Box
            sx={{
              borderBottom: 'solid 1px white',
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              marginBottom: '25px',
              color: 'white'
            }}
          >
            <img
              src={LocationPin}
              alt="Location Icon"
              width="20"
              height="20"
              style={{
                marginRight: '20px'
              }}
            />
            <Typography sx={settingSectionText}>Current Location</Typography>
          </Box>
          <Stack spacing={2}>
            <Box sx={styleListItemBox}>
              <FormControl sx={{ m: 0, minWidth: 120, width: '100%' }} size="small">
                <InputLabel
                  sx={{ fontSize: '14px', color: 'white' }}
                  id="rating-simple-select-label"
                >
                  Location
                </InputLabel>
                <Select
                  labelId="location-label"
                  id="deliveryArea"
                  name="deliveryArea"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  variant="standard"
                  sx={{
                    color: 'white',
                    fontSize: '14px',
                    width: '100%',
                    '&:border': {
                      color: 'white'
                    }
                  }}
                >
                  {location.map((locationData) => (
                    <MenuItem key={locationData._id} value={locationData._id}>
                      {locationData.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="text"
            onClick={handleLogout}
            sx={{
              backgroundColor: '#EBDBD5',
              textColor: '#58362A',
              width: '196px',
              borderRadius: '15px',
              height: '50px',
              color: '#58362A',
              fontWeight: '300',
              fontSize: '14px',
              textTransform: 'none',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              marginBottom: '30px',
              '&:hover': {
                backgroundColor: '#58362A',
                color: 'white',
                transition: 'ease-in .3s'
              }
            }}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default MenuOverlay;
