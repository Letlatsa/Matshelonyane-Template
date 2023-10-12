import React from 'react';
import '../styles/login.css';
import CustomCard from '../components/CustomCard';
import CreateAccountForm from '../components/forms/CreateAccountForm';

function CreateAccount() {
  return (
    <div className="Login-container">
      <CustomCard>
        <CreateAccountForm />
      </CustomCard>
    </div>
  );
}

export default CreateAccount;
