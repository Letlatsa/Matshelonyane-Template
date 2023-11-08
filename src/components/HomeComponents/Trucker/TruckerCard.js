import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, Stack, Box } from '@mui/material';
import PhoneIcon from '../../../assets/phone.svg';
import LocationIcon from '../../../assets/location.svg';

const TruckerCard = () => {
  const navigate = useNavigate();
  const handleButtonClickedProposalPage = () => {
    navigate('/clientprofile');
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
    <Card
      sx={{
        width: '100%',
        backgroundColor: '#C69585',
        paddingTop: '15px',
        paddingBottom: '15px'
      }}
    >
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Box sx={{ width: '78px', display: 'flex', paddingRight: '15px' }}>
          <Box sx={styledProfileBox} onClick={handleButtonClickedProposalPage}>
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: '44px', height: '44px', borderRadius: 50 }}
            />
          </Box>
        </Box>
        <Stack spacing={2} sx={{ paddingRight: '15px' }}>
          <Box
            sx={{
              display: 'flex',
              width: '280px',
              justifyContent: 'space-between',
              color: 'white'
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '15px', paddingTop: '15px' }}>John Doe</Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography
                sx={{
                  fontSize: '16px',
                  filter: 'blur(10deg)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '15px',
                  marginRight: '40px'
                }}
              >
                <img
                  src={LocationIcon}
                  alt="Phone"
                  width="30"
                  height="20"
                  sx={{ marginRight: '15px' }}
                />
                Gaborone
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}></Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default TruckerCard;
