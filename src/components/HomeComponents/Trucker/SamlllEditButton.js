import { Box, Button, Typography } from '@mui/material';

import EditIcon from '../../../assets/EditVector.svg';

const SmallEditButton = ({ onClick }) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'end', marginBottom: '20px' }}>
      <Button
        variant="text"
        sx={{
          backgroundColor: '#FFFFFF',
          textColor: '#58362A',
          width: '66px',
          borderRadius: '5px',
          height: '25px',
          color: '#58362A',
          fontWeight: '300',
          fontSize: '14px',
          marginTop: '-20px',
          textTransform: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: '#58362A',
            color: 'white',
            transition: 'ease-in .3s'
          }
        }}
      >
        <Typography sx={{ height: '20px', display: 'flex' }}>Edit</Typography>
        <img src={EditIcon} alt="MenuIcon" width="14" height="14" />
      </Button>
    </Box>
  );
};

export default SmallEditButton;
