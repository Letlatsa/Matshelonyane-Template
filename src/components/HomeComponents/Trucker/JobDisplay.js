import React from 'react';
import { Box, Card, Stack, Typography, Button } from '@mui/material';

import PlaceHolder from '../../../assets/Avatar.svg';
import theme from '../../../theme/theme';

function JobDisplay() {
  const styledProfileBox = {
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBDBD5',
    padding: 0,
    borderradius: '50px',
    marginLeft: 1,
    height: '40px',
    width: '40px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
  };

  return (
    <div>
      <Box flexGrow={1} marginTop={5} marginLeft={2} marginRight={2}>
        <Card
          sx={{
            //width: '100%',
            width: 'calc(100% - 10px)',
            backgroundColor: '#C69585',
            paddingTop: '15px',
            marginBottom: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '15px'
            }}
          >
            <Box
              sx={{
                width: '78px',
                display: 'flex',
                paddingRight: '15px',
                marginBottom: '0'
              }}
            >
              <Box sx={{ ...styledProfileBox, marginTop: '-40px' }}>
                <img
                  src={PlaceHolder}
                  alt=""
                  style={{ width: '44px', height: '44px', borderRadius: 20 }}
                />
              </Box>
            </Box>
            <Stack
              spacing={2}
              sx={{
                flex: 1, // Take remaining space
                paddingRight: '15px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'white',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    marginRight: '50px'
                  }}
                >
                  <Typography sx={{ fontSize: '15px' }}>Client: John</Typography>
                  <Typography sx={{ fontSize: '15px' }}>Pickup:</Typography>
                  <Typography sx={{ fontSize: '15px' }}>Destination: </Typography>
                  <Typography sx={{ fontSize: '15px' }}>Price: </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    marginLeft: '30px'
                  }}
                >
                  <Typography sx={{ fontSize: '15px' }}>Pickup</Typography>
                  <Typography sx={{ fontSize: '15px' }}>Pickup: </Typography>
                  <Typography sx={{ fontSize: '15px' }}>Destination: </Typography>
                  <Typography sx={{ fontSize: '15px' }}>Price:</Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '10px' }}>
            <Button
              variant="contained"
              sx={{
                fontSize: '14px',
                width: '180px',
                borderRadius: '5px',
                height: '25px',
                color: theme.palette.secondary.main,
                '&:hover': {
                  color: theme.palette.primary.main
                },
                textTransform: 'none'
              }}
            >
              Apply
            </Button>
          </Box>
          <Box sx={{ height: '20px' }} />
        </Card>
      </Box>
    </div>
  );
}

export default JobDisplay;
