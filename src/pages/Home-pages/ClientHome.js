import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ClientMenuOverlay from '../../components/HomeComponents/Client/ClientMenuOverlay';

import {
  RetrieveSurnameEndpoint,
  TrucksInDeliveryArea,
  LocationRetrieveEndpoint,
  PostProfileVisits,
  DownloadUmageEndPoint
} from '../../services/EndPoints';

import { Container, FormControl, InputLabel, Select, MenuItem, Card, Stack } from '@mui/material';
import EllipsisV from '../../assets/ellipsisVIcon.svg';
import PhoneIcon from '../../assets/phone.svg';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme/theme';

const ClientHome = () => {
  // Styles

  const styledAppBar = {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  };

  const styledProfileBox = {
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.variant,
    padding: 0,
    borderradius: '50px',
    marginLeft: 1,
    height: '50px',
    width: '50px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };
  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState(false);

  const storedLastName = 'Doe';
  const [lastName, setLastName] = useState(storedLastName || '');
  const [truckersData, setTruckersData] = useState([]);
  const [deliveryAreaId, setDeliveryAreaId] = useState('65434e0376d09d13951a4314');
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [profilePic, setProfilePic] = useState('');

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
    setDeliveryAreaId(selectedLocation);
    console.log('Selected Locatiion:', selectedLocation);
  };

  useEffect(() => {
    RetrieveSurnameEndpoint(accessToken).then((userData) => {
      const {
        _id,
        firstName,
        lastName,
        propic,
        profileType,
        deliveryArea,
        driversLicense,
        account
      } = userData.data;

      console.log(_id);

      let accountID; // store the account._id

      if (account && account._id) {
        accountID = account._id;
      } else {
        console.error('account or account._id is undefined');
      }

      const user = {
        _id: _id,
        firstName: firstName,
        lastName: lastName,
        propic: propic,
        profileType: profileType,
        deliveryArea: deliveryArea,
        driversLicense: driversLicense,
        account: accountID
      };

      setLastName(lastName);
      getProfilePic(propic);

      sessionStorage.setItem('user', JSON.stringify(user));
      console.log('this is the lastname', lastName);
      console.log(userData);
    });
  }, [accessToken]);

  useEffect(() => {
    console.log('Current Delivery Area ID:', deliveryAreaId);
    const fetchTruckerData = async () => {
      try {
        // Fetch location data to get the deliveryAreaId
        const locationResponse = await LocationRetrieveEndpoint(accessToken);
        const selectedLocation = locationResponse.data.find(
          (location) => location._id === deliveryAreaId
        );

        if (selectedLocation) {
          // Update the state with the selected location
          setSelectedLocation(selectedLocation._id);
          setDeliveryAreaId(selectedLocation._id);

          // Get truckers data for the selected location
          getTrucksersInArea(accessToken, selectedLocation._id);
        } else {
          console.error('Selected location not found.');
        }
      } catch (error) {
        console.error('Error fetching truckers data: ', error);
      }
    };

    fetchTruckerData();
  }, [accessToken, deliveryAreaId]);

  const getTrucksersInArea = (accessToken, deliveryAreaId) => {
    TrucksInDeliveryArea(accessToken, deliveryAreaId)
      .then((truckersData) => {
        setTruckersData(truckersData);
        console.log('Truckers Data:', truckersData);
        return truckersData.data;
      })
      .catch((error) => {
        console.error('Error fetching truckers', error);
      });
  };

  const getProfilePic = async (key) => {
    DownloadUmageEndPoint(key)
      .then((response) => {
        if (response.status === 200) {
          const bybeImage = response.data;

          const imageUrl = `data:image/png;base64,${bybeImage}`;
          setProfilePic(imageUrl);
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };

  const handleButtonClicked = () => {
    navigate('/clientprofile');
  };

  const handleButtonOverlayClicked = () => {
    if (isOverlay === false) {
      setIsOverlay(true);
    } else {
      setIsOverlay(false);
    }
  };
  //profile visits
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
                  alt=""
                  style={{ width: '44px', height: '44px', borderRadius: 50 }}
                />
              </Box>
            </Box>
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
            {/* <Container
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '5px',
                padding: 0,
                alignItems: 'center'
              }}
            >
              <TextField
                label="Search..."
                color=""
                autoWidth
                sx={{ width: '100%', paddingLeft: '5px' }}
                size="small"
              />
              <IconButton sx={{ width: '40px' }}>
                <img
                  src={SearchIcon}
                  alt="Search"
                  width="30"
                  height="20"
                  sx={{ marginRight: '30px' }}
                />
              </IconButton>
            </Container> */}
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
              alignContent: 'center',
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
          <Stack spacing={2}>
            {truckersData?.map((truckersData) => (
              <Card
                key={truckersData._id}
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
                        src={truckersData.profile.propic}
                        alt=""
                        style={{ width: '44px', height: '44px', borderRadius: 50 }}
                      />
                    </Box>
                  </Box>
                  <Stack spacing={2} sx={{ paddingRight: '15px' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        width: '280px',
                        justifyContent: 'space-between',
                        color: 'white'
                      }}
                    >
                      <Box>
                        <Typography variant="h4" sx={{ fontSize: '15px' }}>
                          {`${truckersData.profile.firstName} ${truckersData.profile.lastName}`}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography
                          sx={{
                            fontSize: '16px',
                            filter: 'blur(3px)',
                            display: 'flex',
                            alignItems: 'center'
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
                          width: '280px',
                          borderRadius: '5px',
                          height: '25px',
                          color: theme.palette.secondary.main,
                          '&:hover': {
                            color: theme.palette.primary.main
                          },
                          textTransform: 'none'
                        }}
                        onClick={async () => {
                          const {
                            profile: { account: driverId }
                          } = truckersData;

                          const userData = sessionStorage.getItem('user');

                          const { account } = JSON.parse(userData);

                          const data = {
                            locationID: selectedLocation,
                            driverID: driverId,
                            clientID: account
                          };
                          console.log('data', data);

                          try {
                            // Call PostProfileVisits
                            const response = await PostProfileVisits(accessToken, data);
                            console.log('Profile visit response:', response);

                            // Navigate to the trucker's profile
                            navigate(`/clienttruckerprofile/${truckersData.profile.account}`);
                          } catch (error) {
                            console.error('Error handling profile visit:', error);
                          }
                        }}
                      >
                        View Profile
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default ClientHome;
