import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {
  Container,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Rating,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';

import BoltIcon from '@mui/icons-material/Bolt';
import { Home, BubbleChart, Article, MoreVert } from '@mui/icons-material';

const ClientHome = () => {
  const [rating, setRating] = useState('');
  const [value, setValue] = useState('Home');

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
  };

  // Styles

  const styledAppBar = {
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: 'none'
  };

  const styledBottomNav = {
    position: 'fixed',
    bottom: 0,
    width: '100%'
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
    height: '40px',
    width: '40px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={styledAppBar}>
          <Toolbar sx={{ height: '70px' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MoreVert />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textAlign: 'end',
                height: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontFamily: 'Lexend Deca'
              }}
            >
              Hi, Doe
            </Typography>
            <Box sx={styledProfileBox}>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                style={{ width: '35px', height: '35px', borderRadius: 50 }}
              />
            </Box>
          </Toolbar>
        </AppBar>
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
            Lets find your hauler
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
                boxShadow: '1px 6px 6px rgba(0, 0, 0, 0.3)',
                borderRadius: '5px',
                paddingLeft: "15px",
                paddingRight: "15px"
              }}
            >
              <TextField label="Search..." variant="standard" color="" sx={{width: "300px"}}/>
              <IconButton sx={{ width: '30px'}}>
                <BoltIcon />
              </IconButton>
            </Container>
          </FormControl>
        </Container>
        <Container>
          <Box>
            <Box>
              <Typography>Truckers</Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box>
            <Box>Sort by:</Box>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="rating-simple-select-label">Rating</InputLabel>
                <Select
                  labelId="rating-simple-select-label"
                  id="demo-simple-select"
                  value={rating}
                  label="Rating"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>3</MenuItem>
                  <MenuItem value={20}>4</MenuItem>
                  <MenuItem value={30}>5</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="rating-simple-select-label">Location</InputLabel>
                <Select
                  labelId="rating-simple-select-label"
                  id="demo-simple-select"
                  value={rating}
                  label="Rating"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Gaborone</MenuItem>
                  <MenuItem value={20}>Francistown</MenuItem>
                  <MenuItem value={30}>Maun</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box>
            <Card>
              <Box>
                <Box>
                  <img src="https://picsum.photos/200/300" alt="Trucker" />
                </Box>
                <Box>
                  <box>
                    <Typography>John Doe</Typography>
                    <Typography>78322342</Typography>
                  </box>
                  <box>
                    <Rating></Rating>
                    <Typography>Trucks Owned: 2</Typography>
                  </box>
                </Box>
              </Box>
              <Box>
                <Button>Request Pickup</Button>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>
      <BottomNavigation showLabels onChange={handleNavigation} value={value} sx={styledBottomNav}>
        <BottomNavigationAction value="Home" icon={<Home />} />
        <BottomNavigationAction value="Chat" icon={<BubbleChart />} />
        <BottomNavigationAction value="List" icon={<Article />} />
      </BottomNavigation>
    </div>
  );
};

export default ClientHome;
