import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeAppBar from '../../components/HomeComponents/HomeAppBar';
import TruckerCard from '../../components/HomeComponents/Trucker/TruckerCard';
import SearchComponent from '../../components/HomeComponents/Trucker/SearchComponent';
import SearchFilter from '../../components/HomeComponents/SearchFilter';

import { Container, Stack } from '@mui/material';
const TruckerHome = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <HomeAppBar />
      </Box>
      <Box>
        <SearchComponent />
        <Container>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '5px'
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '15px' }}>Your Profile views</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#58362A', height: '.2px', width: '55vw' }}></Box>
          </Box>
          <SearchFilter />
          <Stack spacing={2}>
            <TruckerCard />
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default TruckerHome;
