/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import {
  Container,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Card,
  BottomNavigation,
  BottomNavigationAction,
  Stack
} from '@mui/material';
import Typography from '@mui/material/Typography';
import TruckerHomeAppBar from '../../components/HomeComponents/Trucker/TruckerHomeAppBar';
import TruckerCard from '../../components/HomeComponents/Trucker/TruckerCard';
import SearchComponent from '../../components/HomeComponents/Trucker/SearchComponent';
import SearchFilter from '../../components/HomeComponents/SearchFilter';
import { LocationRetrieveEndpoint } from '../../services/EndPoints';
import { useToken } from '../../Hooks/TokenContext';
import { useState, useEffect } from 'react';
import theme from '../../theme/theme';
import BottomNavigationComponent from '../../components/HomeComponents/Trucker/BottomNavigationComponent';

const TruckerHome = () => {
  const { tokens } = useToken();
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

  const styledSelect = {
    width: '100%',
    color: 'white',
    borderBottom: ' 2px solid white',
    marginBottom: '10px'
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <TruckerHomeAppBar />
      </Box>
      <Box>
        <SearchComponent />
        <Container>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '5px'
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{ fontSize: '15px', color: theme.palette.secondary.main }}
              >
                Your Profile views
              </Typography>
            </Box>
            <Box
              sx={{ backgroundColor: theme.palette.secondary.main, height: '.5px', width: '55vw' }}
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
            {/* <Typography sx={{ fontSize: '16px', marginLeft: '10px' }}>Sort by:</Typography>

            <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
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
            </FormControl> */}
          </Box>
          <Stack spacing={2}>
            <TruckerCard accessToken={accessToken} />
          </Stack>
        </Container>
        <BottomNavigationComponent />
      </Box>
    </div>
  );
};

export default TruckerHome;
