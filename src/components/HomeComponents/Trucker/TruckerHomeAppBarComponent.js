import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TurckerMenuOverlay from './TurckerMenuOverlay';

import { RetrieveSurnameEndpoint, DownloadUmageEndPoint } from '../../../services/EndPoints';

import EllipsisV from '../../../assets/ellipsisVIcon.svg';
import { useNavigate } from 'react-router-dom';
import theme from '../../../theme/theme';

function TruckerHomeAppBarComponent() {
  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState(false);

  const storedLastName = 'Doe';
  const [lastName, setLastName] = useState(storedLastName || '');
  const [profilePic, setProfilePic] = useState('');

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

  const handleButtonOverlayClicked = () => {
    if (isOverlay === false) {
      setIsOverlay(true);
    } else {
      setIsOverlay(false);
    }
  };
  const handleButtonClicked = () => {
    navigate('/truckerprofileview');
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
    backgroundColor: theme.palette.primary.variant,
    padding: 0,
    borderradius: '50px',
    marginLeft: 1,
    height: '50px',
    width: '50px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <TurckerMenuOverlay isOverlay={isOverlay} setIsOverlay={setIsOverlay} />
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
                marginRight: '20px',
                paddingTop: '7px',
                whiteSpace: 'nowrap',
                marginLeft: '130px',
                color: theme.palette.secondary.main
              }}
            >
              Hi, {lastName}
            </Typography>
            <Button onClick={handleButtonClicked} sx={{ p: 0, ml: -2 }}>
              <Box sx={styledProfileBox}>
                <img
                  src={profilePic}
                  alt=""
                  style={{ width: '44px', height: '44px', borderRadius: 50 }}
                />
              </Box>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default TruckerHomeAppBarComponent;
