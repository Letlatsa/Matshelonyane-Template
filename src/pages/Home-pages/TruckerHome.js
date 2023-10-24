import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BottomNavigationComponent from '../../components/HomeComponents/Trucker/BottomNavigationComponent';
import HomeAppBar from '../../components/HomeComponents/HomeAppBar';
import TruckerCard from '../../components/HomeComponents/Trucker/TruckerCard';

import {
  Container,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Stack
} from '@mui/material';
import SearchIcon from '../../assets/searchIcon.svg';

const TruckerHome = () => {
  const [rating, setRating] = useState('');
  const handleChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <HomeAppBar />
      </Box>
      <Box>
        <Container sx={{ marginTop: '90px' }}>
          <Typography
            sx={{
              fontFamily: 'lato',
              fontSize: '24px',
              color: '#58362A',
              fontWeight: 400,
              marginBottom: '30px'
            }}
          >
            Lets find your next haul
          </Typography>
          <FormControl
            sx={{
              width: '100%',
              height: '50px',
              marginBottom: '50px'
            }}
          >
            <Container
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.3)',
                borderRadius: '5px',
                padding: 0,
                alignItems: 'center'
              }}
            >
              <TextField
                label="Search..."
                color=""
                autoWidth
                sx={{ width: '100%', paddingLeft: '5px' }}
                size="small"
              />
              <IconButton sx={{ width: '40px' }}>
                <img
                  src={SearchIcon}
                  alt="Search"
                  width="30"
                  height="20"
                  sx={{ marginRight: '30px' }}
                />
              </IconButton>
            </Container>
          </FormControl>
        </Container>
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ fontSize: '20px' }}>Requests</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#58362A', height: '.2px', width: '296px' }}></Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px'
            }}
          >
            <Typography sx={{ fontSize: '16px', marginLeft: '10px' }}>Sort by:</Typography>
            <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
              <InputLabel sx={{ fontSize: '14px' }} id="rating-simple-select-label">
                Price
              </InputLabel>
              <Select
                small
                labelId="rating-simple-select-label"
                id="demo-simple-select"
                value={rating}
                label="Rating"
                onChange={handleChange}
                sx={{
                  fontSize: '14px',
                  width: '100%',
                  boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.3)'
                }}
              >
                <MenuItem sx={{ fontSize: '14px' }} value={10}>
                  P200
                </MenuItem>
                <MenuItem sx={{ fontSize: '14px' }} value={20}>
                  P200
                </MenuItem>
                <MenuItem sx={{ fontSize: '14px' }} value={30}>
                  P200
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
              <InputLabel sx={{ fontSize: '14px' }} id="rating-simple-select-label">
                Location
              </InputLabel>
              <Select
                small
                labelId="rating-simple-select-label"
                id="demo-simple-select1"
                value={rating}
                label="Rating"
                onChange={handleChange}
                sx={{
                  fontSize: '14px',
                  width: '100%',
                  boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.3)'
                }}
              >
                <MenuItem sx={{ fontSize: '14px' }} value={10}>
                  Gaborone
                </MenuItem>
                <MenuItem sx={{ fontSize: '14px' }} value={20}>
                  Francistown
                </MenuItem>
                <MenuItem sx={{ fontSize: '14px' }} value={30}>
                  Maun
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
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
