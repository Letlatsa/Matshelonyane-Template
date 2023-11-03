import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

const StyledCard = {
  maxWidth: { mobile: 630, tablet: 500, laptop: 600, desktop: 600 },
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(198, 149, 133, .3)',
  borderTopLeftRadius: '30px',
  borderTopRightRadius: '30px',
  borderBottomLeftRadius: { mobile: '0px', tablet: '50px', laptop: '50px', desktop: '50px' },
  borderBottomRightRadius: { mobile: '0px', tablet: '50px', laptop: '50px', desktop: '50px' },
  backdropFilter: 'blur(30px)',
  position: 'absolute',
  bottom: { mobile: 0, tablet: 125, laptop: 130, desktop: 130 }
};

const styledCardContent = {
  width: { mobile: '90%', tablet: '89%', laptop: '90%', desktop: '90%' }
};

const StyledBox = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

function CustomCard({ children }) {
  return (
    <Box sx={StyledBox}>
      <Card sx={StyledCard}>
        <CardContent sx={styledCardContent}>{children}</CardContent>
      </Card>
    </Box>
  );
}

export default CustomCard;
