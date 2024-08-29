import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import homeIcon from '../../../assets/homeVector.svg';
//import messageIcon from '../../../assets/evaMessage.svg';
import clipBoardIcon from '../../../assets/Group1.svg';

const BottomNavigationComponent = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('Home');

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
  };
  const handlePosting = () => {
    navigate('/truckerjobpost');
  };
  const TruckerHomePage = () => {
    navigate('/truckerhome');
  };
  const styledNavAction = {
    backgroundColor: '#C69585',
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };

  const styledNavActiveAction = {
    backgroundColor: '#58362A',
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
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
            <img
              src={homeIcon}
              alt="Phone"
              width="30"
              height="20"
              sx={{ marginRight: '30px' }}
              onClick={TruckerHomePage}
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
              onClick={handlePosting}
            />
          </Box>
        }
      />
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
