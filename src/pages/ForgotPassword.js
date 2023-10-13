import React from 'react';
import CustomCard from '../components/CustomCard';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import '../styles/login.css';
import LogoCard from '../components/Logo';

function ForgotPassword() {
  return (
    <div className="Login-container">
      <LogoCard />
      <CustomCard>
        <ForgotPasswordForm />
      </CustomCard>
    </div>
  );
}

export default ForgotPassword;
