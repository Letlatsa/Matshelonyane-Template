//MUI button
import React from 'react';
import Button from '@mui/material/Button';

const LoginButton = () => {
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
          textTransform: 'none'
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
