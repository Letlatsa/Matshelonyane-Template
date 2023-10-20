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
  MenuItem,
  Switch
} from '@mui/material';

import BackArrow from '../../assets/backVectorWhite.svg';
import AccountIcon from '../../assets/account.svg';
import NotificationBell from '../../assets/bellVector.svg';
import RightArrow from '../../assets/rightVectorArrow.svg';
import LocationPin from '../../assets/circum_location-on1.svg';

const MenuOverlay = () => {
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
    backdropFilter: "blur('20px')",
    height: '100vh'
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
    <div style={overlayStyles}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <Toolbar sx={{ height: '70px' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <img src={BackArrow} alt="MenuIcon" width="13" height="30" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ paddingTop: '80px' }}>
        <Typography sx={{ color: '#f8f8f8', fontSize: '24px', marginBottom: '30px' }}>
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
            <Box sx={styleListItemBox}>
              <Typography sx={styledStackTypography}>Edit profile</Typography>
              <img src={RightArrow} alt="MenuIcon" width="15" height="30" />
            </Box>
            <Box sx={styleListItemBox}>
              <Typography sx={styledStackTypography}>Change password</Typography>
              <img src={RightArrow} alt="MenuIcon" width="15" height="30" />
            </Box>
            <Box sx={styleListItemBox}>
              <Typography sx={styledStackTypography}>Switch account</Typography>
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
              src={NotificationBell}
              alt="Notification Icon"
              width="20"
              height="20"
              style={{
                marginRight: '20px'
              }}
            />
            <Typography sx={settingSectionText}>Notifications</Typography>
          </Box>
          <Stack spacing={2}>
            <Box sx={styleListItemBox}>
              <Typography sx={styledStackTypography}>Messages</Typography>
              <Switch></Switch>
            </Box>
            <Box sx={styleListItemBox}>
              <Typography sx={styledStackTypography}>Requests</Typography>
              <Switch></Switch>
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
                <InputLabel sx={{ fontSize: '14px' }} id="rating-simple-select-label">
                  Location
                </InputLabel>
                <Select
                  small
                  labelId="rating-simple-select-label"
                  id="demo-simple-select"
                  label="Rating"
                  sx={{
                    fontSize: '14px',
                    width: '100%',
                    '&:border': {
                      color: 'white'
                    }
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
          </Stack>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="text"
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
              boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
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
