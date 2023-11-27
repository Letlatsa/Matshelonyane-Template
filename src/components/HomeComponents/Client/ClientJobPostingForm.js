import React from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';

function ClientJobPostingForm() {
  const styledCard = {
    width: '100%',
    backgroundColor: '#C69585',
    borderRadius: '10px',
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '16px',
    paddingBottom: '16px',
    color: 'white'
  };

  const styledStack = {
    width: '100%',
    paddingLeft: '15px',
    paddingRight: '15px'
  };

  const styledStackTypography = {
    color: 'F8F8F8',
    fontSize: '16px',
    fontWeight: 500
  };
  return (
    <Card sx={styledCard}>
      <Stack spacing={2} sx={styledStack}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Typography sx={styledStackTypography}>name</Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default ClientJobPostingForm;
