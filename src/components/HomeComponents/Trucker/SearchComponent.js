import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Container, FormControl, TextField } from '@mui/material';
import SearchIcon from '../../../assets/searchIcon.svg';

const SearchComponent = () => {
  return (
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
  );
};

export default SearchComponent;
