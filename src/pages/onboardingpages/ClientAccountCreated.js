import React from 'react';
import CardComponent from '../../components/OnboardingComponents/CardComponent';
import ClientAccountCreatedContent from '../../components/OnboardingComponents/ClientAccountCreatedContent';
function ClientAccountCreated() {
  return (
    <div>
      <CardComponent>
        <ClientAccountCreatedContent />
      </CardComponent>
    </div>
  );
}

export default ClientAccountCreated;
