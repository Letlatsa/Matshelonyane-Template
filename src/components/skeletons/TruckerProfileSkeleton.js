import { Skeleton, Box, Typography, Card, Stack } from '@mui/material';

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
  marginBottom: '30px',
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
// Your Skeleton component representing the loading state
const TruckerProfileSkeleton = () => (
  <Stack spacing={2}>
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
    <Box sx={styledDeviderBox}>
      <Box>
        <Typography sx={{ fontSize: '20px' }}>
          {' '}
          <Skeleton variant="text" width={100} height={20} />
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#58362A', height: '.2px', minWidth: '296px' }}></Box>
    </Box>
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
            <Skeleton variant="text" width={100} height={20} />
          </Typography>
          <Typography sx={styledStackTypography}>
            <Skeleton variant="text" width={100} />
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Typography sx={styledStackTypography}>
            {' '}
            <Skeleton variant="text" width={100} height={20} />
          </Typography>
          <Typography sx={styledStackTypography}>
            <Skeleton variant="text" width={100} />
          </Typography>
        </Box>
      </Stack>
    </Card>
  </Stack>
);

export default TruckerProfileSkeleton;
