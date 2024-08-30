import React, { useEffect, useState } from 'react';
import { Box, Card, Stack, Typography, Button } from '@mui/material';
import {
  accceptProposalEndpoint,
  ViewClientInfo,
  DownloadUmageEndPoint
} from '../../../services/EndPoints';
import PhoneIcon from '../../../assets/phoness.svg';
import { useNavigate } from 'react-router-dom';
import '../../../styles/JobDisplay.css'; // Import the CSS file

function JobDisplay({ requestData }) {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState(null);
  const [imageData] = useState(null);
  const [customerImages, setCustomerImages] = useState({}); // Initialize as an empty object

  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  const updateCustomerImage = (customerId, imageData) => {
    setCustomerImages((prevImages) => ({
      ...prevImages,
      [customerId]: imageData // Store image data using customer ID as the key
    }));
  };

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      if (requestData && requestData.length > 0) {
        const uniqueCustomerIds = [...new Set(requestData.map((job) => job.customer))];

        const customerDataPromises = uniqueCustomerIds.map(async (customerId) => {
          try {
            const customerInfo = await ViewClientInfo(accessToken, customerId);
            setCustomerData((prevData) => ({
              ...prevData,
              [customerId]: customerInfo
            }));

            const imageResponse = await DownloadUmageEndPoint(customerInfo.propic);
            const imageData = imageResponse.data;

            if (imageData) {
              updateCustomerImage(customerId, imageData);
            }
          } catch (error) {
            console.error(`Error fetching customer data for ID ${customerId}:`, error);
          }
        });

        await Promise.all(customerDataPromises);
      }
    };

    fetchCustomerDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestData]);

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

  return (
    <div className="job-display-container">
      <Box className="job-display-box">
        {requestData && requestData.length > 0 ? (
          requestData.map((job, index) => (
            <Card key={index} className="job-display-card">
              <Box className="job-display-top-section">
                <Box className="job-display-profile-box">
                  <Box
                    className="job-display-profile-container"
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
                      alt="Profile"
                      className="job-display-profile-picture"
                    />
                  </Box>
                </Box>
                <Stack spacing={2} className="job-display-job-details">
                  <Box className="job-display-job-info">
                    <Box className="job-display-detail">
                      <Typography className="job-display-customer-name">
                        {customerData &&
                        customerData[job.customer] &&
                        customerData[job.customer].firstName
                          ? customerData[job.customer].firstName
                          : 'N/A'}
                      </Typography>
                      <Typography className="job-display-label">Pickup:</Typography>
                      <Typography className="job-display-label">Destination:</Typography>
                      <Typography className="job-display-label">Price:</Typography>
                    </Box>
                    <Box className="job-display-detail">
                      <Typography className="job-display-phone">
                        <>
                          <img
                            src={PhoneIcon}
                            alt="Account Icon"
                            width="20"
                            height="20"
                            className="job-display-phone-icon"
                          />
                        </>
                        {customerData &&
                        customerData[job.customer] &&
                        customerData[job.customer].account &&
                        customerData[job.customer].account.number
                          ? customerData[job.customer].account.number
                          : 'N/A'}
                      </Typography>
                      <Typography className="job-display-value">{`${job.cargoDescription}`}</Typography>
                      <Typography className="job-display-value">{`${job.dropOffLocation}`}</Typography>
                      <Typography className="job-display-value">{`${job.pricePerLoad}`}</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
              <Box className="job-display-button-box">
                <Button
                  variant="contained"
                  className={
                    job.status === 'posted'
                      ? 'job-display-apply-button'
                      : 'job-display-accepted-button'
                  }
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
              <Box className="job-display-spacing-box" />
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
