import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  Avatar,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import AccountIcon from '../../assets/account.svg';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../assets/backVectorWhite.svg';
import styles from '../../styles/ClientHomeProfile.module.css';

function ClientHomeProfile() {
  // Placeholder user data
  const userData = '{"_id":"user123","firstName":"John","lastName":"Doe","propic":""}';
  const { _id, firstName, lastName, propic } = JSON.parse(userData);

  const [profilePic, setProfilePic] = useState('');
  const [formData, setFormData] = useState({ firstName, lastName });
  const [formErrors, setFormErrors] = useState({ firstNameError: '', lastNameError: '' });
  const [avatarImage, setAvatarImage] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName } = formData;
    const errors = {};

    if (!firstName) {
      errors.firstNameError = 'Firstname is required';
    }
    if (!lastName) {
      errors.lastNameError = 'Lastname is required';
    }

    setFormErrors(errors);
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      // Placeholder for form submission
      console.log('Form is valid, perform submission logic here');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setFile(file);
      reader.onload = (e) => {
        setAvatarImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Placeholder for fetching profile picture logic
    console.log('Fetch profile picture using the key:', propic);
  }, [propic]);

  const handleButtonBackArrowClicked = () => {
    navigate('/clientprofile');
  };

  return (
    <div className={styles.container}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar sx={{ height: '70px' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleButtonBackArrowClicked}
          >
            <img src={BackArrow} alt="MenuIcon" width="13" height="30" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: '85vw', overflowY: 'scroll', paddingTop: '60px' }}>
        <Typography className={styles.typographyTitle}>Edit your profile</Typography>
        <input
          type="file"
          accept="image/*"
          id="propic"
          name="propic"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="propic">
          <Box className={styles.avatarBox}>
            {avatarImage ? (
              <Avatar alt="User Avatar" src={avatarImage} sx={{ width: 130, height: 130 }} />
            ) : (
              <Avatar alt="User Avatar" src={profilePic} sx={{ width: 130, height: 130 }}></Avatar>
            )}
          </Box>
        </label>

        <Typography className={styles.uploadText}>Upload your profile picture</Typography>
        <Box>
          <FormControl className={styles.formControl}>
            <Box className={styles.inputContainerBox}>
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Account"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    First name
                  </div>
                }
                type="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                className={styles.textField}
                value={formData.firstName}
                onChange={handleInputChange}
                error={!!formErrors.firstNameError}
                helperText={formErrors.firstNameError}
              />
              <TextField
                variant="standard"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={AccountIcon}
                      alt="Lastname"
                      width="30"
                      height="20"
                      sx={{ marginRight: '30px' }}
                    />
                    Last name
                  </div>
                }
                type="lastName"
                name="lastName"
                placeholder="Enter your Last name"
                className={styles.textField}
                value={formData.lastName}
                onChange={handleInputChange}
                error={!!formErrors.lastNameError}
                helperText={formErrors.lastNameError}
              />
            </Box>
          </FormControl>
          <Box>
            <Button
              variant="text"
              color="primary"
              type="submit"
              className={styles.submitButton}
              onClick={validateForm}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ClientHomeProfile;
