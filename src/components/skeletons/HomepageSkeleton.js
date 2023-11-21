import { Skeleton, Card, Box, Stack, Typography, Button } from '@mui/material';

function HomepageSkeleton() {
  return (
    <Stack spacing={2}>
      {[1, 2, 3].map((_, index) => (
        <Card
          key={index}
          sx={{
            width: '100%',
            backgroundColor: '#C69585',
            paddingTop: '15px',
            paddingBottom: '15px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px'
          }}
        >
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Box sx={{ width: '78px', display: 'flex', paddingRight: '15px' }}>
              <Box
                sx={{
                  background:
                    'linear-gradient(270deg, #C69585 18.75%, rgba(198, 149, 133, 0.00) 109.72%)'
                }}
              />
              <Skeleton
                variant="circular"
                width={44}
                height={44}
                sx={{
                  flexShrink: 0
                }}
              />
            </Box>
            <Stack spacing={2} sx={{ paddingRight: '15px' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '280px',
                  justifyContent: 'space-between',
                  color: 'white'
                }}
              >
                <Typography variant="h6">
                  <Skeleton variant="text" width={120} height={20} />
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="h6">
                    <Skeleton variant="text" width={70} height={20} />
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button
                  variant="text"
                  sx={{
                    width: '280px',
                    height: '25px',
                    borderRadius: '5px',
                    background:
                      'linear-gradient(270deg, #C69585 18.75%, rgba(198, 149, 133, 0.00) 109.72%)'
                  }}
                >
                  <Skeleton variant="text" width={80} height={20} />
                </Button>
              </Box>
            </Stack>
          </Box>
        </Card>
      ))}
    </Stack>
  );
}

export default HomepageSkeleton;
