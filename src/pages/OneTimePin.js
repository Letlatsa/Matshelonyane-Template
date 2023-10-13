import React from 'react';
import CustomCard from '../components/CustomCard';
import OneTimePinFForm from '../components/forms/OneTimePinForm';
import '../styles/login.css';

function OneTimePin() {
  return (
    <div className="Login-container">
      <CustomCard>
        <OneTimePinFForm />
      </CustomCard>
    </div>
  );
}

export default OneTimePin;
