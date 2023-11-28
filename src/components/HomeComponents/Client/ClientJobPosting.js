import { useState } from 'react';
import React from 'react';

import ClientAppBarComponent from './ClientAppBarComponent';
import ClientBottomNav from './ClientBottomNav';
import ClientJobPostingForm from './ClientJobPostingForm';
import { Box } from '@mui/material';

function ClientJobPosting() {
  return (
    <div>
      <ClientAppBarComponent />
      <ClientJobPostingForm />
      <ClientBottomNav />
    </div>
  );
}

export default ClientJobPosting;
