import React from 'react';
import { Box, Card, Stack, Typography, Button } from '@mui/material';
import { GetPostRequestEndpoint } from '../../../services/EndPoints';
import { useEffect, useState } from 'react';
import PlaceHolder from '../../../assets/Avatar.svg';
import theme from '../../../theme/theme';
import { useNavigate } from 'react-router-dom';

function JobDisplay({ requestData }) {
  const navigate = useNavigate();

  // Initialize appliedJobs state
  const [appliedJobs, setAppliedJobs] = useState(new Set());

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
  return (
    <div style={{ height: 'calc(100vh - 50px)', overflowY: 'auto', backgroundColor: '#EEEFF3' }}>
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
                        navigate(`/truckerproposalpage/${job._id}`, { state: { requestData } });
                        console.log(job._id);
                      } catch (error) {
                        console.error('Error', error);
                      }
                    }}
                  >
                    <img
                      src={PlaceHolder}
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
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Client:</Typography>
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
                      <Typography sx={{ fontSize: '15px', color: '#000' }}>Pickup</Typography>
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
                  sx={{
                    fontSize: '14px',
                    width: '180px',
                    borderRadius: '5px',
                    height: '25px',
                    color: '#FFF5EF',
                    backgroundColor: '#C08288',
                    textTransform: 'none'
                  }}
                >
                  Apply
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
