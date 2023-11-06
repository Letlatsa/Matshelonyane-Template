import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BottomNavigationComponent from '../../components/HomeComponents/Trucker/BottomNavigationComponent';
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
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ fontSize: '20px' }}>Requests</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#58362A', height: '.2px', width: '296px' }}></Box>
          </Box>
          <SearchFilter />
          <Stack spacing={2}>
            <TruckerCard />
          </Stack>
        </Container>
      </Box>
      <BottomNavigationComponent />
    </div>
  );
};

export default TruckerHome;
