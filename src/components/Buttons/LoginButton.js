import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './LoginButton.css';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <Button
        variant="text"
        color="primary"
        type="submit"
        className="styledSubmitButton"
        onClick={handleButtonClick}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;