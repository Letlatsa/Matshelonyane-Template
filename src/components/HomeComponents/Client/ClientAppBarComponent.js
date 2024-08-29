import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ClientMenuOverlay from './ClientMenuOverlay';
import EllipsisV from '../../../assets/ellipsisVIcon.svg';
import { useNavigate } from 'react-router-dom';
import theme from '../../../theme/theme';

function ClientAppBarComponent() {
  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState(false);

  // Placeholder data
  const [lastName, setLastName] = useState('Doe');
  const [profilePic, setProfilePic] = useState('path_to_placeholder_image'); // Replace with actual image path

  const handleButtonOverlayClicked = () => {
    setIsOverlay(!isOverlay);
  };

  const handleButtonClicked = () => {
    navigate('/clientprofile');
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
    marginLeft: 1,
    height: '50px',
    width: '50px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };

  return (
    <div>
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
                  alt="Profile"
                  style={{ width: '44px', height: '44px', borderRadius: '50%' }}
                />
              </Box>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default ClientAppBarComponent;
