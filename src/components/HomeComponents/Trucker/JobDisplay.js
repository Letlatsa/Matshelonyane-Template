import React from 'react';
import { Box, Card, Stack, Typography, Button } from '@mui/material';
import { accceptProposalEndpoint, ViewClientInfo, DownloadUmageEndPoint } from '../../../services/EndPoints';
import { useEffect, useState } from 'react';
import PlaceHolder from '../../../assets/Avatar.svg';
import theme from '../../../theme/theme';
import { useNavigate } from 'react-router-dom';
const TokenSession = sessionStorage.getItem('Tokens');
const accessToken = JSON.parse(TokenSession).accessToken;

function JobDisplay({ requestData }) {
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [customerImages, setCustomerImages] = useState({}); // Initialize as an empty object

  const updateCustomerImage = (customerId, imageData) => {
    setCustomerImages((prevImages) => ({
      ...prevImages,
      [customerId]: imageData // Store image data using customer ID as the key
    }));
  };

  /* useEffect(() => {
    const fetchCustomerDetails = async () => {
      if (requestData && requestData.length > 0) {
        const customerId = requestData[2].customer; // Assuming the customer ID is stored in the first job request
        console.log(customerId, 'hiii');
        try {
          const customerInfo = await ViewClientInfo(accessToken, customerId); // Fetch customer data from API
          setCustomerData(customerInfo);
          console.log(customerInfo, 'customer info'); // Update state with customer data

          // Download the image
          const imageResponse = await DownloadUmageEndPoint(customerInfo.propic);
          const imageData = imageResponse.data;
          setImageData(imageData);
          console.log('' + imageData);
        } catch (error) {
          console.error('Error fetching customer data:', error);
        }
      }
    };

    fetchCustomerDetails();
  }, [requestData]); */

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      if (requestData && requestData.length > 0) {
        // Extract unique customer IDs from the job requests
        const uniqueCustomerIds = new Set();
        requestData.forEach((job) => {
          uniqueCustomerIds.add(job.customer);
        });

        // Fetch details for each unique customer ID
        const customerDetailsPromises = Array.from(uniqueCustomerIds).map(async (customerId) => {
          try {
            const customerInfo = await ViewClientInfo(accessToken, customerId);
            // Update state with customer data (you might want to structure this differently based on your needs)
            setCustomerData((prevData) => ({
              ...prevData,
              [customerId]: customerInfo // Using customerId as a key for each customer's info
            }));
            console.log(customerInfo, 'i am hereeee');
            // Download the image
            const imageResponse = await DownloadUmageEndPoint(customerInfo.propic);
            const imageData = imageResponse.data;
            // Update image data for the specific customer separately
            if (imageData) {
              updateCustomerImage(customerId, imageData);
            }
            setImageData(imageData);
            console.log('' + imageData);
          } catch (error) {
            console.error(`Error fetching customer data for ID ${customerId}:`, error);
          }
        });

        // Wait for all customer details to be fetched before proceeding
        await Promise.all(customerDetailsPromises);
      }
    };

    fetchCustomerDetails();
  }, [requestData]);

  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  const acceptPost = async (id) => {
    const data = {
      deliveryRequestID: id
    };
    await accceptProposalEndpoint(accessToken, data)
      .then((result) => {
        if (result) {
          handleRelaod();
        } else {
          console.log('cannot accept');
        }
      })
      .catch((err) => {});
  };

  const handleRelaod = () => {
    navigate('/truckerjobpost');
  };

  // Styling object
  const styledProfileBox = {
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBDBD5',
    padding: 0,
    borderradius: '50px',
    marginLeft: 1,
    height: '40px',
    width: '40px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
  };
  const styledStackTypography = {
    color: 'F8F8F8',
    fontSize: '16px',
    fontWeight: 500
  };
  const styledNotAppliedButton = {
    fontSize: '14px',
    width: '180px',
    borderRadius: '5px',
    height: '25px',
    color: '#FFF5EF',
    backgroundColor: '#C08288',
    textTransform: 'none'
  };

  const styledIsAppliedButton = {
    fontSize: '14px',
    width: '180px',
    borderRadius: '5px',
    height: '25px',
    color: '#FFF5EF',
    backgroundColor: 'gray',
    textTransform: 'none'
  };

  return (
    <div style={{ height: 'calc(100vh - 100px)', overflowY: 'auto', backgroundColor: '#EEEFF3' }}>
      <Box flexGrow={1} marginTop={2} marginLeft={2} marginRight={2}>
        {requestData && requestData.length > 0 ? (
          requestData.map((job, index) => (
            <Card
              key={index}
              sx={{
                width: 'calc(100% - 0px)',
                backgroundColor: '#FFF',
                paddingTop: '15px',
                marginBottom: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '15px'
                }}
              >
                <Box
                  sx={{
                    width: '78px',
                    display: 'flex',
                    paddingRight: '15px',
                    marginBottom: '0'
                  }}
                >
                  <Box
                    sx={{ ...styledProfileBox, marginTop: '-40px' }}
                    onClick={async () => {
                      try {
                        // Navigate to the trucker's profile
                        navigate(`/truckerproposalpage/${job._id}`, {
                          state: { requestData, customerData, imageData }
                        });
                        console.log(job._id);
                      } catch (error) {
                        console.error('Error', error);
                      }
                    }}
                  >
                    <img
                      src={
                        customerImages[job.customer]
                          ? `data:image/jpeg;base64,${customerImages[job.customer]}`
                          : ''
                      }
                      alt=""
                      style={{ width: '44px', height: '44px', borderRadius: 20 }}
                    />
                  </Box>
                </Box>
                <Stack
                  spacing={2}
                  sx={{
                    flex: 1,
                    paddingRight: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: 'white',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        marginRight: '50px'
                      }}
                    >
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>
                        {customerData &&
                        customerData[job.customer] &&
                        customerData[job.customer].firstName
                          ? customerData[job.customer].firstName
                          : 'N/A'}{' '}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Pickup:</Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>
                        Destination:{' '}
                      </Typography>
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Price: </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        marginLeft: '-80px'
                      }}
                    >
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>
                        {/*  {customerData && customerData.account.number
                          ? customerData.account.number
                          : 'N/A'} */}
                      </Typography>
                      <Box></Box>
                      <Typography
                        sx={{ fontSize: '15px', color: '#000' }}
                      >{`${job.cargoDescription}`}</Typography>
                      <Typography
                        sx={{ fontSize: '15px', color: '#000' }}
                      >{`${job.dropOffLocation}`}</Typography>
                      <Typography
                        sx={{ fontSize: '15px', color: '#000' }}
                      >{`${job.pricePerLoad}`}</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '10px' }}>
                <Button
                  variant="contained"
                  sx={job.status === 'posted' ? styledNotAppliedButton : styledIsAppliedButton}
                  onClick={() => {
                    if (job.status === 'posted') {
                      acceptPost(job._id);
                    }
                  }}
                >
                  {job.status === 'posted' ? (
                    <Typography>Apply</Typography>
                  ) : (
                    <Typography>Accepted</Typography>
                  )}
                </Button>
              </Box>
              <Box sx={{ height: '20px' }} />
            </Card>
          ))
        ) : (
          <Typography>No job requests available</Typography>
        )}
      </Box>
    </div>
  );
}

export default JobDisplay;
