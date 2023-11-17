import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TruckerHomeAppBar from '../../components/HomeComponents/Trucker/TruckerHomeAppBar';
import TruckerCard from '../../components/HomeComponents/Trucker/TruckerCard';
import SearchComponent from '../../components/HomeComponents/Trucker/SearchComponent';
import SearchFilter from '../../components/HomeComponents/SearchFilter';

import { Container, Stack } from '@mui/material';
import theme from '../../theme/theme';
const TruckerHome = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <TruckerHomeAppBar />
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
              <Typography variant='h4' sx={{ fontSize: '15px', color: theme.palette.secondary.main }}>Your Profile views</Typography>
            </Box>
            <Box sx={{ backgroundColor: theme.palette.primary.main, height: '.5px', width: '55vw' }}></Box>
          </Box>

          {/* <Stack spacing={2}>
            <TruckerCard />
          </Stack> */}
        </Container>
      </Box>
    </div>
  );
};

export default TruckerHome;
