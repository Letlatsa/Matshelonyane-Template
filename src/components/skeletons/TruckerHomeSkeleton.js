import React from 'react';
import { Box, Card, Skeleton, Stack, Typography } from '@mui/material';

function TruckerHomeSkeleton() {
  return (
    <div>
      <>
        {[1, 2, 3].map((_, index) => (
          <Card
            key={index}
            sx={{
              width: '100%',
              backgroundColor: '#C69585',
              paddingTop: '15px',
              paddingBottom: '15px',
              marginBottom: '15px' // Adjust spacing between cards
            }}
          >
            <Box sx={{ display: 'flex', width: '100%' }}>
              <Box sx={{ width: '78px', display: 'flex', paddingRight: '15px' }}>
                <Box
                  sx={{
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'C69585'
                  }}
                >
                  <Skeleton variant="circular" width={44} height={44} />
                </Box>
              </Box>
              <Stack spacing={2} sx={{ paddingRight: '15px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    width: '70vw',
                    justifyContent: 'space-between',
                    color: 'white'
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: '15px', paddingTop: '15px' }}>
                      <Skeleton variant="text" width={100} />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      textAlign: 'right',
                      display: 'flex',
                      justifyContent: 'end'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        filter: 'blur(10deg)',
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '15px',
                        marginRight: '15px'
                      }}
                    >
                      <Skeleton variant="rectangular" width={30} height={20} />
                      <Skeleton variant="text" width={100} />
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  {/* Additional content for the card, if needed */}
                </Box>
              </Stack>
            </Box>
          </Card>
        ))}
      </>
    </div>
  );
}

export default TruckerHomeSkeleton;
