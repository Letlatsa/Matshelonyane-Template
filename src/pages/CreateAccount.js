import React from 'react';
import '../styles/login.css';
import CustomCard from '../components/CustomCard';
import CreateAccountForm from '../components/forms/CreateAccountForm';
import LogoCard from '../components/LogogCard';

function CreateAccount() {
  return (
    <div className="Login-container">
    <LogoCard/>
      <CustomCard>
        <CreateAccountForm />
      </CustomCard>
    </div>
  );
}

export default CreateAccount;
