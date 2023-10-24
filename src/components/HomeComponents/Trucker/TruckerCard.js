import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, Stack, Box } from '@mui/material';
import PhoneIcon from '../../../assets/phone.svg';

const TruckerCard = () => {
  const navigate = useNavigate();
  const handleButtonClickedProposalPage = () => {
    navigate('/truckerproposalpage');
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
              <Typography sx={{ fontSize: '15px' }}>John Doe</Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography
                sx={{
                  fontSize: '16px',
                  filter: 'blur(10deg)',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img
                  src={PhoneIcon}
                  alt="Phone"
                  width="30"
                  height="20"
                  sx={{ marginRight: '30px' }}
                />
                78322342
              </Typography>
              <Typography sx={{ fontSize: '13px', fontWeight: 300 }}>Trucks Owned: 2</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              variant="text"
              sx={{
                backgroundColor: '#FBF8F7',
                textColor: '#58362A',
                width: '280px',
                borderRadius: '5px',
                height: '25px',
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
              Apply
            </Button>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default TruckerCard;
