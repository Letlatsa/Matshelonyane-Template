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
import ProposalPageForm from '../../components/HomeComponents/Trucker/ProposalPageForm';
import { useNavigate } from 'react-router-dom';

const TruckerProposalPage = () => {
  const navigate = useNavigate();
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
    width: '250px',
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

  const handleButtonClicked = () => {
    navigate('/truckerjobpost');
    console.log('Button clicked');
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
              Proposal
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
            Client Doe
          </Typography>
        </Box>
        <Card sx={styledCard}>
          <Box sx={styleBriefInfo}>
            <Typography sx={styledBriefBigText}>1 hour ago</Typography>
            <Typography sx={styledBriefSmallText}>Posted</Typography>
          </Box>
          <Box sx={{ height: '53px', width: '1px', backgroundColor: 'white' }} />
          <Box sx={styleBriefInfo}>
            <Typography sx={styledBriefBigText}>P 500</Typography>
            <Typography sx={styledBriefSmallText}>Price per load</Typography>
          </Box>
        </Card>
        <Box sx={styledDeviderBox}>
          <Box>
            <Typography sx={{ fontSize: '20px' }}>Details</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '296px' }}></Box>
        </Box>

        {/*  <Card sx={styledCard}>
          <Typography>Job details</Typography>
        </Card> */}
        <ProposalPageForm />
      </Container>
    </div>
  );
};

export default TruckerProposalPage;
