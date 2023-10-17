//MUI button
import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dashboard');
  };

  const styledSubmitButton = {
    fontSize: 18,
    backgroundColor: '#EBDBD5',
    textColor: '#58362A',
    width: '100%',
    borderRadius: '15px',
    height: '50px',
    color: '#58362A',
    fontWeight: '100',
    textTransform: 'none',
    marginBottom: '30px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  };

  return (
    <div>
      <Button
        variant="text"
        color="primary"
        type="submit"
        sx={styledSubmitButton}
        onClick={handleButtonClick}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
