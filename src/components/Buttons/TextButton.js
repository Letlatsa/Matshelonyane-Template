import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TextButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/createaccount');
  };

  return (
    <Button
      variant="text"
      sx={{
        color: '#FDB299',
        textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
        fontWeight: '100',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }}
      onClick={handleButtonClick}
    >
      Sign up
    </Button>
  );
};

export default TextButton;
