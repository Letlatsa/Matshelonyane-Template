import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

import homeIcon from '../../../assets/homeVector.svg';
import messageIcon from '../../../assets/evaMessage.svg';
import clipBoardIcon from '../../../assets/Group1.svg';
import requestIcon from '../../../assets/requestIcon.svg';

const BottomNavigationComponent = () => {
  const [value, setValue] = useState('Home');

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
  };

  const styledBottomNav = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '80px'
  };

  return (
    <BottomNavigation showLabels onChange={handleNavigation} value={value} sx={styledBottomNav}>
      <BottomNavigationAction
        value="Home"
        icon={
          <Box
            sx={{
              backgroundColor: '#C69585',
              width: '40px',
              height: '40px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img src={homeIcon} alt="Phone" width="30" height="20" sx={{ marginRight: '30px' }} />
          </Box>
        }
      />
      <BottomNavigationAction
        value="Chat"
        icon={
          <Box
            sx={{
              backgroundColor: '#C69585',
              width: '40px',
              height: '40px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={messageIcon}
              alt="Phone"
              width="30"
              height="20"
              sx={{ marginRight: '30px' }}
            />
          </Box>
        }
      />
      <BottomNavigationAction
        value="Group"
        icon={
          <Box
            sx={{
              backgroundColor: '#C69585',
              width: '40px',
              height: '40px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={clipBoardIcon}
              alt="Phone"
              width="30"
              height="20"
              sx={{ marginRight: '30px' }}
            />
          </Box>
        }
      />
      <BottomNavigationAction
        value="Request"
        icon={
          <Box
            sx={{
              backgroundColor: '#C69585',
              width: '40px',
              height: '40px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={requestIcon}
              alt="Phone"
              width="30"
              height="20"
              sx={{ marginRight: '30px' }}
            />
          </Box>
        }
      />
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
