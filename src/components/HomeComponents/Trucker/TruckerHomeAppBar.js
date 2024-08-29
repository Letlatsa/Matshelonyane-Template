import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuOverlay from '../Trucker/TurckerMenuOverlay';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import EllipsisV from '../../../assets/ellipsisVIcon.svg';
import HeaderSkeleton from '../../skeletons/HeaderSkeleton';

import './TruckerHomeAppBar.css'; // Import the CSS file

const TruckerHomeAppBar = () => {
  const navigate = useNavigate();
  const [isOverlay, setIsOverlay] = useState(false);

  // Mock data
  const storedLastName = 'Doe';
  const [lastName, setLastName] = useState(storedLastName || '');
  const [profilePic, setProfilePic] = useState(''); // Set a default or placeholder image

  // Commented out API calls
  // const TokenSession = sessionStorage.getItem('Tokens');
  // const accessToken = JSON.parse(TokenSession).accessToken;

  // const [isLoadingData, setIsLoadingData] = useState(true);

  // useEffect(() => {
  //   // Simulate data loading
  //   const timeout = setTimeout(() => {
  //     setIsLoadingData(false);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, []);

  // useEffect(() => {
  //   RetrieveSurnameEndpoint(accessToken).then((userData) => {
  //     const {
  //       lastName,
  //       propic
  //     } = userData.data;

  //     setLastName(lastName);
  //     getProfilePic(propic);

  //     const user = {
  //       lastName: lastName,
  //       propic: propic
  //     };

  //     sessionStorage.setItem('user', JSON.stringify(user));
  //     console.log('this is the lastname', lastName);
  //   });
  // }, [accessToken]);

  // Mock function to simulate profile picture loading
  // const getProfilePic = async (key) => {
  //   DownloadUmageEndPoint(key)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const bybeImage = response.data;
  //         const imageUrl = `data:image/png;base64,${bybeImage}`;
  //         setProfilePic(imageUrl);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       throw error;
  //     });
  // };

  const handleButtonClicked = () => {
    navigate('/truckerprofileview');
  };

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
        {/* Check if data is loading */}
        {/* Replace with mock loading */}
        <HeaderSkeleton /> {/* This can be removed if you want to bypass the skeleton loading */}
        {/* Render actual content */}
        <>
          <Typography
            variant="h6"
            className="greeting"
          >
            Hi, {lastName}
          </Typography>
          <Box onClick={handleButtonClicked}>
            <Box className="profileBox">
              <img
                src={profilePic || 'default-profile-pic.png'} // Use a default or placeholder image
                alt="Profile"
                className="profilePic"
              />
            </Box>
          </Box>
        </>
      </Toolbar>
    </AppBar>
  );
};

export default TruckerHomeAppBar;
