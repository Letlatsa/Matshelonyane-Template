import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Container,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Card
} from '@mui/material';

import BoltIcon from '@mui/icons-material/Bolt';

const ClientHome = () => {
  const [rating, setRating] = React.useState('');

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Typography>Lets find your hauler</Typography>
        <FormControl>
          <TextField label="Search..." variant="standard" color="warning"></TextField>
          <IconButton>
            <BoltIcon />
          </IconButton>
        </FormControl>
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
                  </box>
                  <box></box>
                </Box>
              </Box>
              <Box>
                <Button>Request Pickup</Button>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ClientHome;
