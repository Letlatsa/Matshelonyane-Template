import { Box, Card, Container, Skeleton, Stack, Typography } from '@mui/material';

//styles
const styledProfileBox = {
  borderRadius: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#EBDBD5',
  padding: 0,
  height: '100px',
  width: '100px',
  boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
  marginBottom: '15px'
};
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

const styledDeviderBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 0,
  height: '15px'
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
const ClientProfileSkeleton = () => (
  <Container sx={{ marginTop: '90px' }}>
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '50px'
      }}
    >
      <Box sx={styledProfileBox}>
        <Skeleton variant="circular" width={95} height={95} />
      </Box>
      <Typography
        sx={{
          color: ' #58362A',
          fontFamily: 'Lato',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          letterSpacing: '-0.17px'
        }}
      >
        <Skeleton variant="text" width={150} />
      </Typography>
      <Typography
        sx={{
          color: '#C69585',
          fontFamily: 'Lato',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          letterSpacing: '-0.17px',
          marginBottom: '15px'
        }}
      >
        <Skeleton variant="text" width={200} />
      </Typography>
      <Skeleton
        variant="rectangular"
        width={196}
        height={50}
        sx={{
          backgroundColor: '#EBDBD5',
          borderRadius: '15px',
          color: '#58362A',
          fontWeight: '300',
          fontSize: '14px',
          textTransform: 'none',
          boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)'
        }}
      />
    </Box>

    <Box sx={styledDeviderBox}>
      <Box>
        <Typography sx={{ fontSize: '20px' }}>
          {' '}
          <Skeleton variant="text" width={100} />
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '65vw' }}></Box>
    </Box>

    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'end', marginBottom: '40px' }}></Box>

    <Card sx={styledCard}>
      <Stack spacing={2} sx={styledStack}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Typography sx={styledStackTypography}>
            <Skeleton variant="text" width={100} />
          </Typography>
          <Typography sx={styledStackTypography}>
            <Skeleton variant="text" width={100} />
          </Typography>
        </Box>
      </Stack>
    </Card>
  </Container>
);

export default ClientProfileSkeleton;
