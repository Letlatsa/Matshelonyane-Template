import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Container, FormControl, TextField, colors } from '@mui/material';
import SearchIcon from '../../../assets/searchIcon.svg';
import theme from '../../../theme/theme';

const SearchComponent = () => {
  return (
    <Container sx={{ marginTop: '90px', marginBottom: '20px' }}>
      <Typography
        variant="h2"
        sx={{
          marginBottom: '30px',
          color: theme.palette.secondary.main
        }}
      >
        Lets find your next haul
      </Typography>

      <Container
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '5px',
          padding: 0,
          alignItems: 'center',
        }}
      >
        <FormControl variant="standard" sx={{ padding: 0, height: '50px' }}>
          <TextField
            variant="outlined"
            label="Search..."
            sx={{
              width: '100%',
              paddingLeft: '5px',
              color: theme.palette.secondary.main,
              '& label': {
                color: theme.palette.secondary.main
              }
            }}
          />
        </FormControl>
        <IconButton sx={{ width: '40px', height: '40px' }}>
          <img src={SearchIcon} alt="Search" width="30" height="20" sx={{ marginRight: '30px' }} />
        </IconButton>
      </Container>
    </Container>
  );
};

export default SearchComponent;
