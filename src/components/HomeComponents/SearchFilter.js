import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SearchFilter = () => {
  const [rating, setRating] = useState('');
  const handleChange = (event) => {
    setRating(event.target.value);
  };
  return (
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
  );
};

export default SearchFilter;
