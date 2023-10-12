import React from 'react';
import '../styles/login.css';
import CustomCard from '../components/CustomCard';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

function ForgotPassword() {
  return (
    <div className="Login-container">
      <CustomCard>
        <ForgotPasswordForm />
      </CustomCard>
    </div>
  );
}

export default ForgotPassword;
