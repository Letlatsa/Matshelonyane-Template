import React from 'react';
import CustomCard from '../components/CustomCard';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import '../styles/login.css';

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
