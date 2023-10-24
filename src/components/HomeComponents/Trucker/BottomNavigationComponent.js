import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

import homeIcon from '../../../assets/homeVector.svg';
import messageIcon from '../../../assets/evaMessage.svg';
import clipBoardIcon from '../../../assets/Group1.svg';

const BottomNavigationComponent = () => {
  const [value, setValue] = useState('Home');

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
  };

  const styledNavAction = {
    backgroundColor: '#C69585',
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
  };

  const styledNavActiveAction = {
    backgroundColor: '#58362A',
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
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
          <Box sx={value === 'Home' ? styledNavActiveAction : styledNavAction}>
            <img src={homeIcon} alt="Phone" width="30" height="20" sx={{ marginRight: '30px' }} />
          </Box>
        }
      />
      <BottomNavigationAction
        value="Chat"
        icon={
          <Box sx={value === 'Chat' ? styledNavActiveAction : styledNavAction}>
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
          <Box sx={value === 'Group' ? styledNavActiveAction : styledNavAction}>
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
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
