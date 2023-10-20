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

const ClientProfile = () => {
  const styledProfileBox = {
    borderRadius: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBDBD5',
    padding: 0,
    height: '100px',
    width: '100px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    marginBottom: '15px'
  };

  const styledAppBar = {
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: 'none'
  };

  const styleBriefInfo = {
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const styledBriefBigText = {
    color: '#F8F8F8',
    fontSize: '24px'
  };

  const styledBriefSmallText = {
    color: '#F8F8F8',
    fontSize: '16px',
    fontWeight: 300,
    letterSpacing: '-0.17px'
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

  const styledDeviderBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '30px',
    height: '15px'
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

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <Toolbar sx={{ height: '70px' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
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
              Profile
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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '50px'
          }}
        >
          <Box sx={styledProfileBox}>
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: '95px', height: '95px', borderRadius: 100, backgroundColor: 'grey' }}
            />
          </Box>
          <Typography
            sx={{
              color: ' #58362A',
              fontFamily: 'Lato',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '-0.17px'
            }}
          >
            John Doe
          </Typography>
          <Typography
            sx={{
              color: '#C69585',
              fontFamily: 'Lato',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '-0.17px',
              marginBottom: '15px'
            }}
          >
            Gaborone
          </Typography>
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
            Request Pickup
          </Button>
        </Box>
        <Card sx={styledCard}>
          <Box sx={styleBriefInfo}>
            <Typography sx={styledBriefBigText}>12</Typography>
            <Typography sx={styledBriefSmallText}>Jobs Taken</Typography>
          </Box>
          <Box sx={{ height: '53px', width: '1px', backgroundColor: 'white' }} />
          <Box sx={styleBriefInfo}>
            <Typography sx={styledBriefBigText}>4.0</Typography>
            <Typography sx={styledBriefSmallText}>Rating</Typography>
          </Box>
          <Box sx={{ height: '53px', width: '1px', backgroundColor: 'white' }} />
          <Box sx={styleBriefInfo}>
            <Typography sx={styledBriefBigText}>2</Typography>
            <Typography sx={styledBriefSmallText}>Fleet</Typography>
          </Box>
        </Card>
        <Box sx={styledDeviderBox}>
          <Box>
            <Typography sx={{ fontSize: '20px' }}>Contact</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '296px' }}></Box>
        </Box>
        <Card sx={styledCard}>
          <Stack spacing={2} sx={styledStack}>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={styledStackTypography}>Phone number:</Typography>
              <Typography sx={styledStackTypography}> 71234356</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={styledStackTypography}>Operation location:</Typography>
              <Typography sx={styledStackTypography}>Gaborone, Mogoditshane</Typography>
            </Box>
          </Stack>
        </Card>
        <Box sx={styledDeviderBox}>
          <Box>
            <Typography sx={{ fontSize: '20px' }}>Fleet</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '296px' }}></Box>
        </Box>
        <Card sx={styledCard}>
          <Stack spacing={2} sx={styledStack}>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={styledStackTypography}>Plate number:</Typography>
              <Typography sx={styledStackTypography}> B 123 ABC</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={styledStackTypography}>Truck type:</Typography>
              <Typography sx={styledStackTypography}> Refrigerated cargo</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={styledStackTypography}>Weight capacity:</Typography>
              <Typography sx={styledStackTypography}> 3.5 ton</Typography>
            </Box>
          </Stack>
        </Card>
      </Container>
    </div>
  );
};

export default ClientProfile;
