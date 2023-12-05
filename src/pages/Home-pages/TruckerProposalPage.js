import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  FormControl
} from '@mui/material';
import DescIcon from '../../assets/desc.svg';
import TruckIcon from '../../assets/truck.svg';
import LocationIcon from '../../assets/location.svg';
import TimeIcon from '../../assets/time.svg';
import InstructionIcon from '../../assets/Vector (1).svg';
import PriceIcon from '../../assets/Vector (2).svg';
import LoadingIcon from '../../assets/loading.svg';
import BackArrow from '../../assets/backVector.svg';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TruckerProposalPage = () => {
  const location = useLocation();
  const { state = {} } = location || {};
  const requestData = state ? state.requestData : null;
  //const customerData = state ? state.customerData : null;
  const customerData = location.state.customerData;
  const imageData = location.state.imageData;

  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedJob, setSelectedJob] = useState(null);
  console.log(id);

  console.log(requestData, 'i am requesteddddd');
  console.log(customerData, 'i am customer data');
  console.log(imageData, 'i am customer data,the images');

  useEffect(() => {
    console.log('Request Data:', requestData);
    console.log('Job ID:', id);

    const selectedJob = requestData.find((job) => job._id === id);

    if (selectedJob) {
      // Handle the case where the job is found
      console.log('Selected Job:', selectedJob);
      setSelectedJob(selectedJob);
      console.log(selectedJob.pricePerLoad, 'price per load');
      console.log(selectedJob.pickupTime, 'price per load');
    } else {
      // Handle the case where the job is not found
      console.log('Job not found!');
    }
  }, [id, requestData]);

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

  const inputContainer = {
    marginBottom: '15px',
    padding: '0 20px',
    alignItems: 'center'
  };

  const renderDetails = () => {
    if (!selectedJob) {
      return <div>No data available</div>;
    }

    const detailsData = [
      { label: 'Cargo Description', icon: DescIcon, value: selectedJob?.cargoDescription },
      { label: 'Truck Type', icon: TruckIcon, value: selectedJob?.truckType?.name },
      { label: 'Pickup Location', icon: LocationIcon, value: selectedJob?.pickupLocation },
      { label: 'Drop-off Location', icon: LocationIcon, value: selectedJob?.dropOffLocation },
      { label: 'Pickup Time', icon: TimeIcon, value: selectedJob?.pickupTime },
      {
        label: 'Pickup Instructions',
        icon: InstructionIcon,
        value: selectedJob?.pickupInstructions
      },
      {
        label: 'Loading Service Required',
        icon: LoadingIcon,
        value: selectedJob?.requireLoadingService ? 'Yes' : 'No'
      },
      { label: 'Price per Load', icon: PriceIcon, value: selectedJob?.pricePerLoad }

      // Include other data items here
    ];

    return (
      <Box
        sx={{
          width: '100%',
          marginTop: '-150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: 'calc(100% - 10px)',
            maxWidth: '380px',
            height: '380px',
            backgroundColor: '#C69585',
            borderRadius: '10px',
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '150px',
            color: 'white',
            gap: '15px',
            flexShrink: 0,
            overflowY: 'auto'
          }}
        >
          {detailsData.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
                marginTop: '10px',
                borderBottom: '1px solid white',
                width: '90%' // Set the width of the underline to 80% of the card
              }}
            >
              <img src={item.icon} alt={item.label} style={{ marginRight: '10px' }} />
              <div>{item.value || 'Not available'}</div>
            </div>
          ))}
        </Box>
      </Box>
    );
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
            {imageData && selectedJob && selectedJob.customer && imageData[selectedJob.customer] ? (
              <img
                src={`data:image/jpeg;base64,${imageData[selectedJob.customer]}`}
                alt=""
                style={{
                  width: '95px',
                  height: '95px',
                  borderRadius: 100,
                  backgroundColor: 'grey'
                }}
              />
            ) : (
              <div>No Image</div>
            )}
          </Box>
          {selectedJob && customerData && customerData[selectedJob.customer] ? (
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
              {customerData[selectedJob.customer].firstName || 'N/A'}
              {customerData[selectedJob.customer].lastName
                ? ` ${customerData[selectedJob.customer].lastName}`
                : ''}
            </Typography>
          ) : (
            <Typography>N/A</Typography>
          )}
        </Box>
        {selectedJob ? (
          <Card sx={styledCard}>
            <Box sx={styleBriefInfo}>
              <Typography sx={styledBriefBigText}>{selectedJob.pickupTime}</Typography>
              <Typography sx={styledBriefSmallText}>Posted</Typography>
            </Box>
            <Box sx={{ height: '53px', width: '1px', backgroundColor: 'white' }} />
            <Box sx={styleBriefInfo}>
              <Typography sx={styledBriefBigText}>{selectedJob.pricePerLoad}</Typography>
              <Typography sx={styledBriefSmallText}>Price per load</Typography>
            </Box>
          </Card>
        ) : (
          <div>No data available</div>
        )}
        <Box sx={styledDeviderBox}>
          <Box>
            <Typography sx={{ fontSize: '20px' }}>Details</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '296px' }}></Box>
        </Box>
        {renderDetails()}
      </Container>
    </div>
  );
};

export default TruckerProposalPage;
