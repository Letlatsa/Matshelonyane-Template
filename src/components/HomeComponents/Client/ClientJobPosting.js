//import { useState } from 'react';
import React from 'react';

import ClientAppBarComponent from './ClientAppBarComponent';
import ClientBottomNav from './ClientBottomNav';
import ClientJobPostingForm from './ClientJobPostingForm';
import { Typography } from '@mui/material';
import theme from '../../../theme/theme';

function ClientJobPosting() {
  const styledTypography = {
    alignItems: 'center',
    color: theme.palette.secondary.main
  };
  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          ...styledTypography,
          position: 'absolute',
          top: '120px',
          left: '25%',
          fontSize: '24px',
          transform: 'translateX(-50%)'
        }}
      >
        Request pickup
      </Typography>
      <ClientAppBarComponent />
      <ClientJobPostingForm />
      <ClientBottomNav />
    </div>
  );
}

export default ClientJobPosting;
