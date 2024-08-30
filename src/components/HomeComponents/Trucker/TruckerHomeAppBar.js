import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar, Toolbar, Box } from '@mui/material';
import EllipsisV from '../../../assets/ellipsisVIcon.svg'; // Ensure this path is correct
import MenuOverlay from '../Trucker/TurckerMenuOverlay'; // Ensure this path is correct
import '../../../styles/TruckerHomeAppBar.css'; // Ensure this path is correct

const TruckerHomeAppBar = () => {
  const [isOverlay, setIsOverlay] = React.useState(false);

  const handleButtonOverlayClicked = () => {
    setIsOverlay(prev => !prev);
  };

  return (
    <AppBar position="fixed" className="appBar">
      <MenuOverlay isOverlay={isOverlay} setIsOverlay={setIsOverlay} />
      <Toolbar className="toolbar">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          className="iconButton"
          onClick={handleButtonOverlayClicked}
        >
          <img src={EllipsisV} alt="MenuIcon" className="menuIcon" />
        </IconButton>
        <Typography
          variant="h6"
          className="greeting"
        >
          Hi, User
        </Typography>
        <Box className="profileBox">
          <img
            src={'default-profile-pic.png'} // Use a default or placeholder image
            alt="Profile"
            className="profilePic"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TruckerHomeAppBar;
