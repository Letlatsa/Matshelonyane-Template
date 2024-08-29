import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ClientMenuOverlay from '../../components/HomeComponents/Client/ClientMenuOverlay';
import HeaderSkeleton from '../../components/skeletons/HeaderSkeleton';
import HomepageSkeleton from '../../components/skeletons/HomepageSkeleton';
import ClientBottomNav from '../../components/HomeComponents/Client/ClientBottomNav';
import { Container, FormControl, InputLabel, Select, MenuItem, Card, Stack } from '@mui/material';
import EllipsisV from '../../assets/ellipsisVIcon.svg';
import PhoneIcon from '../../assets/phone.svg';
import theme from '../../theme/theme';
import { useNavigate } from 'react-router-dom';

const ClientHome = () => {
  // Styles
  const styledAppBar = {
    backgroundColor: 'white',
    boxShadow: 'none'
  };

  const styledProfileBox = {
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.variant,
    padding: 0,
    marginLeft: 1,
    height: '50px',
    width: '50px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };

  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoadingTruckers, setIsLoadingTruckers] = useState(true);
  const [lastName, setLastName] = useState('Doe');
  const [truckersData, setTruckersData] = useState([]);
  const [deliveryAreaId, setDeliveryAreaId] = useState('65434e0376d09d13951a4314');
  const [location, setLocation] = useState([{ _id: '65434e0376d09d13951a4314', name: 'Downtown' }]);
  const [selectedLocation, setSelectedLocation] = useState('65434e0376d09d13951a4314');
  const [profilePic, setProfilePic] = useState('');

  // Simulate data loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingData(false);
      setIsLoadingTruckers(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Simulate profile pic and truckers data
  useEffect(() => {
    setProfilePic('path_to_placeholder_image'); // Replace with actual image path
    setTruckersData([
      {
        _id: 'trucker1',
        propic: 'path_to_placeholder_image',
        profile: {
          firstName: 'John',
          lastName: 'Doe',
          account: 'driver1'
        }
      },
      {
        _id: 'trucker2',
        propic: 'path_to_placeholder_image',
        profile: {
          firstName: 'Jane',
          lastName: 'Smith',
          account: 'driver2'
        }
      }
    ]);
  }, []);

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
    setDeliveryAreaId(selectedLocation);
  };

  const handleButtonClicked = () => {
    navigate('/clientprofile');
  };

  const handleButtonOverlayClicked = () => {
    setIsOverlay(!isOverlay);
  };

  return (
    <div className="homeContainer">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <ClientMenuOverlay isOverlay={isOverlay} setIsOverlay={setIsOverlay} />
          <Toolbar sx={{ height: '70px' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleButtonOverlayClicked}
            >
              <img
                src={EllipsisV}
                alt="MenuIcon"
                width="10"
                height="30"
                sx={{ marginRight: '30px' }}
              />
            </IconButton>
            {isLoadingData ? (
              <HeaderSkeleton />
            ) : (
              <>
                <Typography
                  variant="h6"
                  sx={{
                    flexGrow: 1,
                    textAlign: 'end',
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginRight: '10px',
                    paddingTop: '7px',
                    color: theme.palette.secondary.main
                  }}
                >
                  Hi, {lastName}
                </Typography>
                <Box onClick={handleButtonClicked}>
                  <Box sx={styledProfileBox}>
                    <img
                      src={profilePic}
                      alt="Profile"
                      style={{ width: '44px', height: '44px', borderRadius: 50 }}
                    />
                  </Box>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Container sx={{ marginTop: '90px' }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.secondary.main
            }}
          >
            Lets find your hauler
          </Typography>
          <FormControl
            sx={{
              width: '100%',
              height: '50px'
            }}
          >
            {/* Placeholder for search functionality */}
          </FormControl>
        </Container>
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h3" sx={{ color: theme.palette.secondary.main }}>
                Truckers
              </Typography>
            </Box>
            <Box
              sx={{ backgroundColor: theme.palette.secondary.main, height: '.2px', width: '65vw' }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginLeft: '10px',
                marginTop: '12px',
                color: theme.palette.secondary.main,
                width: '100px'
              }}
            >
              Sort by:
            </Typography>
            <FormControl sx={{ m: 0, minWidth: 120, display: 'flex' }}>
              <InputLabel sx={{ fontSize: '14px' }} id="rating-simple-select-label">
                Location
              </InputLabel>
              <Select
                labelId="location-label"
                id="deliveryArea"
                name="deliveryArea"
                value={selectedLocation}
                onChange={handleLocationChange}
                variant="standard"
              >
                {location.map((locationData) => (
                  <MenuItem key={locationData._id} value={locationData._id}>
                    {locationData.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ maxHeight: 'calc(100vh - 170px)', overflowY: 'auto', paddingBottom: '100px' }}>
            <Stack spacing={2}>
              {isLoadingTruckers ? (
                <HomepageSkeleton />
              ) : (
                truckersData.map((trucker) => (
                  <Card
                    key={trucker._id}
                    sx={{
                      width: '100%',
                      backgroundColor: '#C69585',
                      paddingTop: '15px',
                      paddingBottom: '15px',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                      borderRadius: '10px'
                    }}
                  >
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                      <Box sx={{ width: '78px', display: 'flex', paddingRight: '15px' }}>
                        <Box sx={styledProfileBox}>
                          <img
                            src={trucker.propic}
                            alt="Trucker"
                            style={{ width: '44px', height: '44px', borderRadius: 50 }}
                            onClick={() => navigate(`/clienttruckerprofile/${trucker.profile.account}`)}
                          />
                        </Box>
                      </Box>
                      <Stack spacing={2} sx={{ paddingRight: '15px', width: '100%' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            color: 'white'
                          }}
                        >
                          <Box>
                            <Typography variant="h4" sx={{ fontSize: '15px', paddingTop: '15px' }}>
                              {`${trucker.profile.firstName} ${trucker.profile.lastName}`}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              textAlign: 'right',
                              display: 'flex',
                              justifyContent: 'end'
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: '16px',
                                filter: 'blur(3px)',
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: '15px',
                                marginRight: '15px'
                              }}
                            >
                              <img
                                src={PhoneIcon}
                                alt="Phone"
                                width="30"
                                height="20"
                                sx={{ marginRight: '30px' }}
                              />
                              78322342
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                          <Button
                            variant="contained"
                            sx={{
                              fontSize: '14px',
                              width: '100%',
                              borderRadius: '5px',
                              height: '25px',
                              color: theme.palette.secondary.main,
                              '&:hover': {
                                color: theme.palette.primary.main
                              },
                              textTransform: 'none'
                            }}
                            onClick={() => navigate(`/jobposting/${trucker.profile.account}`)}
                          >
                            Request Pickup
                          </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </Card>
                ))
              )}
            </Stack>
          </Box>
          <ClientBottomNav />
        </Container>
      </Box>
    </div>
  );
};

export default ClientHome;
