import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, Stack, Box } from '@mui/material';
import PhoneIcon from '../../../assets/phone.svg';
import LocationIcon from '../../../assets/location.svg';
import { GetProfileVisits, DownloadUmageEndPoint } from '../../../services/EndPoints';
import { useToken } from '../../../Hooks/TokenContext';
import { useState, useEffect } from 'react';

const TruckerCard = () => {
  const navigate = useNavigate();
  const [clientsData, setClientsData] = useState([]);
  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        getProfileVisits(accessToken);
      } catch (error) {
        console.error('Error fetching client data: ', error);
      }
    };

    fetchClientData();
  }, [accessToken]);

  const getUniqueClients = (visitsData) => {
    const uniqueClientsMap = new Map();
    visitsData.forEach((visit) => {
      uniqueClientsMap.set(visit.clientId, visit);
    });
    return Array.from(uniqueClientsMap.values());
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
    <>
      {clientsData.map((client) => (
        <Card
          key={client.id}
          sx={{
            width: '100%',
            backgroundColor: '#C69585',
            paddingTop: '15px',
            paddingBottom: '15px',
            marginBottom: '15px' // Adjust spacing between cards
          }}
        >
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ width: '78px', display: 'flex', paddingRight: '15px' }}>
              <Box sx={styledProfileBox}>
                <img
                  src={client.client.propic}
                  alt=""
                  style={{ width: '44px', height: '44px', borderRadius: 50 }}
                />
              </Box>
            </Box>
            <Stack spacing={2} sx={{ paddingRight: '15px' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '70vw',
                  justifyContent: 'space-between',
                  color: 'white'
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: '15px', paddingTop: '15px' }}>
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
                      paddingTop: '15px',
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
                    {client.location.name} {/* Render client location */}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                {/* Additional content for the card, if needed */}
              </Box>
            </Stack>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default TruckerCard;
