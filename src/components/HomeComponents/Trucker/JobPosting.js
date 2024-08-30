import React from 'react';
import { Box } from '@mui/material';
import BottomNavigationComponent from './BottomNavigationComponent';
import TruckerHomeAppBarComponents from './TruckerHomeAppBarComponent';
import SearchComponent from './SearchComponent';
import JobDisplay from './JobDisplay';

// Dummy data for job postings
const dummyRequestData = [
  { id: 1, title: 'Job Posting 1', description: 'Description for job posting 1' },
  { id: 2, title: 'Job Posting 2', description: 'Description for job posting 2' },
  { id: 3, title: 'Job Posting 3', description: 'Description for job posting 3' }
];

function JobPosting() {
  // Use dummy data instead of fetching from API
  const requestData = dummyRequestData;

  return (
    <div
      style={{
        backgroundColor: '#EEEFF3',
        minHeight: '130vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box>
        <TruckerHomeAppBarComponents />
        <SearchComponent />
        <JobDisplay requestData={requestData} />
        <BottomNavigationComponent />
      </Box>
    </div>
  );
}

export default JobPosting;
