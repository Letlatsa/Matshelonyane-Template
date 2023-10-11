import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LoginForm from './forms/LoginForm';
import { Box } from '@mui/material';

function CustomCard() {
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
          maxWidth: 720,
          width: '100%',
          height: 450,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#e2e8f02a',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
          backdropFilter: 'blur(40px)',
          position: 'absolute',
          bottom: 0
        }}
      >
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
}

export default CustomCard;
