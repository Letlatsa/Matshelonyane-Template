import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

function CustomCard({ children }) {
  return (
    <Box
      sx={{
        backgroundColor: '#e2e8f02a',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card
        sx={{
          maxWidth: 620,
          width: '100%',
          height: 450,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#e2e8f02a',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
          borderBottomLeftRadius: '50px',
          borderBottomRightRadius: '50px',
          backdropFilter: 'blur(10px)',
          position: 'absolute',
          bottom: 75,
          marginBottom: 5
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
}

export default CustomCard;
