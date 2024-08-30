import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import EditIcon from '../../../assets/EditVector.svg';
import styles from './SmallEditButton.module.css';

const SmallEditButton = ({ onClick }) => {
  return (
    <Box className={styles.buttonContainer}>
      <Button variant="text" className={styles.editButton} onClick={onClick}>
        <Typography className={styles.editText}>Edit</Typography>
        <img src={EditIcon} alt="MenuIcon" width="14" height="14" />
      </Button>
    </Box>
  );
};

export default SmallEditButton;
