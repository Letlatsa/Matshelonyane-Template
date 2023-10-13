import { Box } from '@mui/material';
import Logo from '../assets/Logo1.svg';

const LogoCard = () => {
  const StyledContainerBox = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const LogoContainer = {
    marginTop: '100px',
  }

  return (
    <Box sx={StyledContainerBox}>
      <Box sx={LogoContainer}>
        <img src={Logo} alt="Logo" />
      </Box>
    </Box>
  );
};

export default LogoCard;
