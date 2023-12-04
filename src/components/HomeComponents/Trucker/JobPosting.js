import React from 'react';
import { Box } from '@mui/material';
import BottomNavigationComponent from './BottomNavigationComponent';
import TruckerHomeAppBarComponents from './TruckerHomeAppBarComponent';
import SearchComponent from './SearchComponent';
import JobDisplay from './JobDisplay';
import { GetPostRequestEndpoint } from '../../../services/EndPoints';
import { useState, useEffect } from 'react';

function JobPosting() {
  const [requestData, setRequestData] = useState([]);
  const TokenSession = sessionStorage.getItem('Tokens');
  const accessToken = JSON.parse(TokenSession).accessToken;

  useEffect(() => {
    const fetchPostRequest = async () => {
      try {
        const data = await getRequest(accessToken);
        setRequestData(data);
        console.log('Request', data);
      } catch (error) {
        console.error('Error fetching request: ', error);
      }
    };

    fetchPostRequest();
  }, [accessToken]);

  const getRequest = async (accessToken) => {
    try {
      const requestData = await GetPostRequestEndpoint(accessToken);
      return requestData;
    } catch (error) {
      console.log(error, 'Error Fetching Data');
      return []; // Or handle the error accordingly
    }
  };

  return (
    <div style={{ backgroundColor: '#EEEFF3', minHeight: '100vh' }}>
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
