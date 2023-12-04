import React from 'react';
import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';
import DescIcon from '../../../assets/desc.svg';
import TruckIcon from '../../../assets/truck.svg';
import LocationIcon from '../../../assets/location.svg';
import TimeIcon from '../../../assets/time.svg';
import InstructionIcon from '../../../assets/Vector (1).svg';
import PriceIcon from '../../../assets/Vector (2).svg';
import LoadingIcon from '../../../assets/loading.svg';
import theme from '../../../theme/theme';

const ProposalPageForm = () => {
  const inputContainer = {
    marginBottom: '15px',
    padding: '0 20px',
    alignItems: 'center'
  };

  const renderTypography = (label, icon, placeholder) => (
    <Box sx={inputContainer}>
      <FormControl variant="standard">
        <Typography
          component="div"
          variant="subtitle1"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'underline',
            textDecorationColor: 'white'
          }}
        >
          <img src={icon} alt={label} width="30" height="20" sx={{ marginRight: '30px' }} />
          {label}
        </Typography>
        <Typography component="div" variant="body1" sx={{ color: 'white', marginTop: '5px' }}>
          {placeholder}
        </Typography>
      </FormControl>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          width: '100%',
          marginTop: '-150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: 'calc(100% - 3px)',
            maxWidth: '380px',
            height: '572px',
            backgroundColor: '#C69585',
            borderRadius: '10px',
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '150px',
            color: 'white',
            gap: '15px',
            flexShrink: 0,
            overflowY: 'auto'
          }}
        >
          {renderTypography('cargo description', DescIcon)}

          {renderTypography('Trucktype', TruckIcon)}

          {renderTypography('Delivery Area', DescIcon)}

          {renderTypography('Pickup Location', LocationIcon)}

          {renderTypography('Dropoff Location', LocationIcon)}

          {renderTypography('Pick-up Time', TimeIcon)}

          {renderTypography('Pick-up Instructions', InstructionIcon)}
          {renderTypography('offloading service', LoadingIcon)}

          {renderTypography('Price per Load', PriceIcon)}
        </Box>
      </Box>
    </Box>
  );
};

export default ProposalPageForm;
