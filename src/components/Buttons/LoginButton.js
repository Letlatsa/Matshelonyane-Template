//MUI button
import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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
        sx={{
          fontSize: 18,
          backgroundColor: '#FFEB22',
          width: '100%',
          borderRadius: '15px',
          height: '50px',
          color: '#000000',
          fontWeight: '600',
          textTransform: 'none',
          boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
        }}
        onClick={handleButtonClick}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
