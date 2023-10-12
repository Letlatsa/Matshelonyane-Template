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
        color: '#FFEB22',
        marginTop: '25px',
        left: 200,
        textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
      }}
      onClick={handleButtonClick}
    >
      Sign up
    </Button>
  );
};

export default TextButton;
