import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import BottomNavigationComponent from './BottomNavigationComponent';
import TruckerHomeAppBarComponents from './TruckerHomeAppBarComponent';
import SearchComponent from './SearchComponent';
import JobDisplay from './JobDisplay';

function JobPosting() {
  // Dummy data for job postings
  const dummyRequestData = [
    {
      id: '1',
      title: 'Transport Electronics',
      description: 'Pick up from Warehouse 1 and drop off at Retail Store 5.',
      location: 'City A to City B',
      price: '$500',
      status: 'Pending'
    },
    {
      id: '2',
      title: 'Move Furniture',
      description: 'Pick up from Warehouse 2 and deliver to Retail Store 7.',
      location: 'City C to City D',
      price: '$300',
      status: 'In Transit'
    },
    // Add more dummy job postings here if needed
  ];

  const [requestData, setRequestData] = useState(dummyRequestData);

  useEffect(() => {
    // Simulate data fetching or processing
    const timeout = setTimeout(() => {
      setRequestData(dummyRequestData); // Use the dummy data
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

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
