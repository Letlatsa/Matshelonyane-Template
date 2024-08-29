/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, Stack, Box } from '@mui/material';
import PhoneIcon from '../../../assets/phone.svg';
import LocationIcon from '../../../assets/location.svg';
import { GetProfileVisits, DownloadUmageEndPoint } from '../../../services/EndPoints';
import { useToken } from '../../../Hooks/TokenContext';
import { useState, useEffect } from 'react';
import TruckerHomeSkeleton from '../../skeletons/TruckerHomeSkeleton';

const TruckerCard = () => {
  const navigate = useNavigate();

  const [isLoadingClients, setIsLoadingClients] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const [clientsData, setClientsData] = useState([]);
  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  //skeleton timeout
  useEffect(() => {
    // Simulate data loading
    const timeout = setTimeout(() => {
      setIsLoadingData(false);
      setIsLoadingClients(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        getProfileVisits(accessToken);
      } catch (error) {
        console.error('Error fetching client data: ', error);
      }
    };

    fetchClientData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const getUniqueClients = (visitsData) => {
    const uniqueClientsMap = {};
    visitsData.forEach((visit) => {
      // Using _id as the unique identifier for clients
      const clientId = visit.client._id;
      uniqueClientsMap[clientId] = visit;
    });
    return Object.values(uniqueClientsMap);
  };

  const handleButtonClickedProposalPage = () => {
    navigate('/truckerhome');
  };

  const getProfileVisits = (accessToken) => {
    GetProfileVisits(accessToken)
      .then((profileVisits) => {
        const updatedVisits = profileVisits.map(async (visit) => {
          try {
            const response = await DownloadUmageEndPoint(visit.client.propic);
            if (response.status === 200) {
              const byteImage = response.data;
              const imageUrl = `data:image/png;base64,${byteImage}`;

              // Modify the existing object directly
              Object.assign(visit.client, { propic: imageUrl });
            }
            return visit;
          } catch (error) {
            console.error('Error fetching client data: ', error);
            return visit; // Return the original visit object on error
          }
        });

        Promise.all(updatedVisits).then((updatedVisits) => {
          const uniqueClients = getUniqueClients(updatedVisits);
          console.log('Unique Clients:', uniqueClients);
          setClientsData(uniqueClients);
          console.log(uniqueClients, 'am i unique');
        });
      })
      .catch((error) => {
        console.log(error, 'Error Fetching Data');
      });
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
    <div style={{ overflowY: 'scroll', minHeight: '100px' }}>
      {/* Check if data is loading */}
      {isLoadingData ? (
        // Render skeleton while data is loading
        <TruckerHomeSkeleton />
      ) : (
        // Render actual content when data is loaded
        <>
          {clientsData.map((client) => (
            <Card
              key={client.id}
              sx={{
                width: '100%',
                backgroundColor: '#C69585',
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
                  <Box sx={styledProfileBox}>
                    <img
                      src={client.client.propic}
                      alt=""
                      style={{ width: '44px', height: '44px', borderRadius: 50 }}
                    />
                  </Box>
                </Box>
                <Stack
                  spacing={2}
                  sx={{
                    flex: 1, // Take remaining space
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
                    <Box>
                      <Typography sx={{ fontSize: '15px' }}>
                        {client.client.firstName} {client.client.lastName}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        textAlign: 'right',
                        display: 'flex',
                        justifyContent: 'end'
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '16px',
                          filter: 'blur(10deg)',
                          display: 'flex',
                          alignItems: 'center',
                          marginRight: '15px'
                        }}
                      >
                        <img
                          src={LocationIcon}
                          alt="Location"
                          width="30"
                          height="20"
                          sx={{ marginRight: '15px' }}
                        />
                        {client.location.name}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default TruckerCard;
