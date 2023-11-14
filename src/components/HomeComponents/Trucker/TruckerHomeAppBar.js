import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOverlay from '../Client/ClientMenuOverlay';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import EllipsisV from '../../../assets/ellipsisVIcon.svg';
import { RetrieveSurnameEndpoint, DownloadUmageEndPoint } from '../../../services/EndPoints';

const TruckerHomeAppBar = () => {
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
      getProfilePic(propic);

      sessionStorage.setItem('user', JSON.stringify(user));
      console.log('this is the lastname', lastName);
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

  console.log('this is the token', accessToken);

  const handleButtonClicked = () => {
    navigate('/truckerprofileview');
  };
  const handleButtonOverlayClicked = () => {
    if (isOverlay === false) {
      setIsOverlay(true);
    } else {
      setIsOverlay(false);
    }
  };

  const styledAppBar = {
    backgroundColor: '#ffffff',
    color: '#000000',
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
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
  };

  return (
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
          <img src={EllipsisV} alt="MenuIcon" width="10" height="30" sx={{ marginRight: '30px' }} />
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
              src={profilePic}
              alt=""
              style={{ width: '44px', height: '44px', borderRadius: 50 }}
            />
          </Box>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TruckerHomeAppBar;
