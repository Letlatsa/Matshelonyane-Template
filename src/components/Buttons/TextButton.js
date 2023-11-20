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
      onClick={handleButtonClick}
    >
      Sign up
    </Button>
  );
};

export default TextButton;
