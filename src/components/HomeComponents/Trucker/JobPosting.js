import React from 'react';
import { Box } from '@mui/material';
import BottomNavigationComponent from './BottomNavigationComponent';
import TruckerHomeAppBarComponents from './TruckerHomeAppBarComponent';
import SearchComponent from './SearchComponent';
import JobDisplay from './JobDisplay';

function JobPosting() {
  return (
    <Box>
      <TruckerHomeAppBarComponents />
      <SearchComponent />
      <JobDisplay />
      <BottomNavigationComponent />
    </Box>
  );
}

export default JobPosting;
