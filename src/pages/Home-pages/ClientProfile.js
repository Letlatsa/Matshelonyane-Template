import { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { DownloadUmageEndPoint } from '../../services/EndPoints';
import ClientProfileSkeleton from '../../components/skeletons/ClientProfileSkeleton';

const ClientProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const userData = sessionStorage.getItem('user');
  const [profilePic, setProfilePic] = useState('');

  const { firstName, lastName, propic, account } = JSON.parse(userData);

  const accountData = {
    _id: account._id,
    number: account.number
  };

  useEffect(() => {
    // Simulate data loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    getProfilePic(propic);
  }, [propic]);

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
    marginBottom: 0,
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

  const handleButtonClicked = () => {
    navigate('/clienthome');
  };

  const handleOnEditButtonClicked = () => {
    navigate('/clienteditprofile');
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <Toolbar sx={{ height: '70px' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleButtonClicked}
            >
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
        {isLoading ? ( // Check if data is loading, if true, show the skeleton
          <ClientProfileSkeleton />
        ) : (
          <>
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
                  src={profilePic}
                  alt=""
                  style={{
                    width: '95px',
                    height: '95px',
                    borderRadius: 100,
                    backgroundColor: 'grey'
                  }}
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
                {firstName} {lastName}
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
              ></Typography>
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
                onClick={handleOnEditButtonClicked}
              >
                Edit
              </Button>
            </Box>

            <Box sx={styledDeviderBox}>
              <Box>
                <Typography sx={{ fontSize: '20px' }}>Contact</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '65vw' }}></Box>
            </Box>
            <Box
              sx={{ display: 'flex', width: '100%', justifyContent: 'end', marginBottom: '40px' }}
            ></Box>
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
                  <Typography sx={styledStackTypography}> {accountData.number}</Typography>
                </Box>
              </Stack>
            </Card>
          </>
        )}
      </Container>
    </div>
  );
};

export default ClientProfile;
