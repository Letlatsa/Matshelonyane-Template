import React from 'react';
import { Box } from '@mui/material';
import BottomNavigationComponent from './BottomNavigationComponent';
import TruckerHomeAppBarComponents from './TruckerHomeAppBarComponent';

function JobPosting() {
  return (
    <Box>
      <TruckerHomeAppBarComponents />
      <BottomNavigationComponent />
    </Box>
  );
}

export default JobPosting;
