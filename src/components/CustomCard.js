import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
          marginTop: '200px',
          backgroundColor: '#3498db'
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
          <Typography variant="h5" component="div"></Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomCard;
