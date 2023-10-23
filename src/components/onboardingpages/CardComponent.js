import '../../styles/login.css';

import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

const StyledCard = {
  width: '100vw',
  height: '100vh',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#e2e8f02a',
  borderRadius: '0',
  backdropFilter: 'blur(30px)',
  position: 'fixed',
  top: '0',
  left: '0'
};

const StyledBox = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

function CardComponent({ children }) {
  return (
    <div className="Login-container">
      <Box sx={StyledBox}>
        <Card sx={StyledCard}>
          <CardContent
            ntent
            sx={{
              overflowY: 'scroll',
              paddingTop: '30px',
              '&::-webkit-scrollbar': { width: '0.4em' },
              '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' }
            }}
          >
            {children}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default CardComponent;
