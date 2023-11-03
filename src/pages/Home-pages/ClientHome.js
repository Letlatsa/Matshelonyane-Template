import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuOverlay from '../../components/HomeComponents/MenuOverlay';

import ClientBottomNav from '../../components/HomeComponents/Client/ClientBottomNav';

import { RetrieveSurnameEndpoint } from '../../services/EndPoints';

import {
  Container,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Rating,
  Stack
} from '@mui/material';
import EllipsisV from '../../assets/ellipsisVIcon.svg';
import PhoneIcon from '../../assets/phone.svg';
import SearchIcon from '../../assets/searchIcon.svg';
import { useNavigate } from 'react-router-dom';

const ClientHome = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState('');
  const [value, setValue] = useState('Home');
  const [isOverlay, setIsOverlay] = useState(false);

  const storedLastName = sessionStorage.getItem('lastName');
  const [lastName, setLastName] = useState(storedLastName || '');
  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

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

      const user = {
        _id: _id,
        firstName: firstName,
        lastName: lastName,
        propic: propic,
        profileType: profileType,
        deliveryArea: deliveryArea,
        driversLicense: driversLicense,
        account: account
      };

      setLastName(lastName);

      sessionStorage.setItem('lastName', JSON.stringify(user));
      console.log('this is the lastname', lastName);
    });
  }, [accessToken]);

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
  };

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
    backgroundColor: '#EBDBD5',
    padding: 0,
    borderradius: '50px',
    marginLeft: 1,
    height: '50px',
    width: '50px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };

  const handleButtonClicked = () => {
    navigate('/clientprofile');
  };
  const handleButtonTruckerProfileClicked = () => {
    navigate('/clienttruckerprofile');
  };
  const handleButtonOverlayClicked = () => {
    if (isOverlay === false) {
      setIsOverlay(true);
    } else {
      setIsOverlay(false);
    }
  };

  return (
    <div className="homeContainer">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <MenuOverlay isOverlay={isOverlay} setIsOverlay={setIsOverlay} />
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
                color: '#58362A'
              }}
            >
              Hi, {lastName}
            </Typography>
            <Button onClick={handleButtonClicked}>
              <Box sx={styledProfileBox}>
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  style={{ width: '44px', height: '44px', borderRadius: 50 }}
                />
              </Box>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Container sx={{ marginTop: '90px' }}>
          <Typography
            sx={{
              fontFamily: 'lato',
              fontSize: '24px',
              color: '#58362A',
              fontWeight: 400,
              marginBottom: '30px',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            Lets find your hauler
          </Typography>
          <FormControl
            sx={{
              width: '100%',
              height: '50px',
              marginBottom: '50px'
            }}
          >
            <Container
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
            </Container>
          </FormControl>
        </Container>
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ fontSize: '20px', color: '#58362A' }}>Truckers</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#58362A', height: '.2px', width: '296px' }}></Box>
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
            <Typography sx={{ fontSize: '16px', marginLeft: '10px', color: '#58362A' }}>
              Sort by:
            </Typography>
            <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
              <InputLabel sx={{ fontSize: '14px' }} id="rating-simple-select-label">
                Location
              </InputLabel>
              <Select
                small
                labelId="rating-simple-select-label"
                id="demo-simple-select"
                value={rating}
                label="Rating"
                onChange={handleChange}
                sx={{
                  fontSize: '14px',
                  width: '100%',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <MenuItem sx={{ fontSize: '14px' }} value={10}>
                  Gaborone
                </MenuItem>
                <MenuItem sx={{ fontSize: '14px' }} value={20}>
                  Francistown
                </MenuItem>
                <MenuItem sx={{ fontSize: '14px' }} value={30}>
                  Maun
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Stack spacing={2}>
            <Card
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
                  <Box sx={styledProfileBox} onClick={handleButtonTruckerProfileClicked}>
                    <img
                      src="https://picsum.photos/200/300"
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
                      <Typography sx={{ fontSize: '15px' }}>John Doe</Typography>
                      <Rating name="size-small" size="small" />
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          filter: 'blur(10deg)',
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
                      <Typography sx={{ fontSize: '13px', fontWeight: 300 }}>
                        Trucks Owned: 2
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                      variant="text"
                      sx={{
                        backgroundColor: '#EBDBD5',
                        textColor: '#58362A',
                        width: '280px',
                        borderRadius: '5px',
                        height: '25px',
                        color: '#58362A',
                        fontWeight: '300',
                        fontSize: '14px',
                        textTransform: 'none',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        '&:hover': {
                          backgroundColor: '#58362A',
                          color: 'white',
                          transition: 'ease-in .3s'
                        }
                      }}
                    >
                      View Profile
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Card>
          </Stack>
        </Container>
      </Box>
      <ClientBottomNav value={value} handleNavigation={handleNavigation} />
    </div>
  );
};

export default ClientHome;
