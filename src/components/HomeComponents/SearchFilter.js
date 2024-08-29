import * as React from 'react';
//import { useState } from 'react';
import Box from '@mui/material/Box';

import { FormControl } from '@mui/material';

const SearchFilter = () => {
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
      <FormControl sx={{ m: 0, minWidth: 120 }} size="small"></FormControl>
    </Box>
  );
};

export default SearchFilter;
