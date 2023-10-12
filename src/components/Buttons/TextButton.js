import { Button } from '@mui/material';

const TextButton = () => {
  return (
    <Button
      variant="text"
      sx={{
        color: '#FFEB22',
        marginTop: '25px',
        left: 250,
        textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
      }}
    >
      Sign up
    </Button>
  );
};

export default TextButton;
