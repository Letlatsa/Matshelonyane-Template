import { useState } from 'react';
import React from 'react';

import ClientAppBarComponent from './ClientAppBarComponent';
import ClientBottomNav from './ClientBottomNav';

function ClientJobPosting() {
  return (
    <div>
      <ClientAppBarComponent />
      <ClientBottomNav />
    </div>
  );
}

export default ClientJobPosting;
