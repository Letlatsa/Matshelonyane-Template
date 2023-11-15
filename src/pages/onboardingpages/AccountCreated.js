import React from 'react';
import CardComponent from '../../components/OnboardingComponents/CardComponent';
import AccountCreatedContent from '../../components/OnboardingComponents/AccountCreatedContent';

function AccountCreated() {
  return (
    <div>
      <CardComponent>
        <AccountCreatedContent />
      </CardComponent>
    </div>
  );
}

export default AccountCreated;
