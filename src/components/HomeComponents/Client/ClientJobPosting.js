import { useState } from 'react';
import React from 'react';

import ClientAppBarComponent from './ClientAppBarComponent';
import ClientBottomNav from './ClientBottomNav';
import ClientJobPostingForm from './ClientJobPostingForm';

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
