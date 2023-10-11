import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import LoginButton from './Buttons/LoginButton';

function CustomCard() {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 450,
          height: 300,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#e2e8f02a',
          borderRadius: '50px',
          backdropFilter: 'blur(40px)'
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 24, justifyContent: 'center' }}
            color="text.secondary"
            gutterBottom
          >
            I am a card
          </Typography>
          <LoginButton />
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomCard;
