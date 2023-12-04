import {
  Box,
  Card,
  Stack,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import DescIcon from '../../../assets/desc.svg';
import TruckIcon from '../../../assets/truck.svg';
import LoadIcon from '../../../assets/load.svg';
import LocationIcon from '../../../assets/location.svg';
import TimeIcon from '../../../assets/time.svg';
import InstructionIcon from '../../../assets/Vector (1).svg';
import PriceIcon from '../../../assets/Vector (2).svg';
import LoadingIcon from '../../../assets/loading.svg';
import theme from '../../../theme/theme';

const ProposalPageForm = () => {
  const styledCard = {
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
  };

  const inputContainer = {
    width: '90%',
    marginBottom: '15px',
    padding: '0 20px',
    alignItems: 'center'
  };

  const styledSubmitButton = {
    height: '50px',
    width: '90%',
    marginBottom: '30px',
    marginTop: '15px'
  };
  const containerStyle = {
    width: '100%',
    marginTop: '-150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  };

  const styledTypography = {
    alignItems: 'center',
    color: theme.palette.secondary.main
  };
  const accountLabelContainer = {
    display: 'flex',
    alignItems: 'center'
  };
  const styledSelect = {
    width: '100%',
    borderBottom: ' 1px solid white',
    color: 'white'
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={containerStyle}>
        <Card sx={styledCard}>
          <div>
            <Box sx={{ marginTop: '20px', color: 'white' }}>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={DescIcon}
                          alt="cargo"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        cargo description
                      </div>
                    }
                    type="cargoDescription"
                    name="cargoDescription"
                    s
                    placeholder="Enter cargo description"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={DescIcon}
                          alt="cargo"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        Trucktype
                      </div>
                    }
                    type="cargoDescription"
                    name="cargoDescription"
                    s
                    placeholder="Enter cargo description"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={DescIcon}
                          alt="cargo"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        DeliveryArea
                      </div>
                    }
                    type="cargoDescription"
                    name="cargoDescription"
                    s
                    placeholder="Enter cargo description"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={LocationIcon}
                          alt="location"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        pickup location
                      </div>
                    }
                    type="pickupLocation"
                    name="pickupLocation"
                    placeholder="Enter location"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={LocationIcon}
                          alt="dropoff"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        dropoff location
                      </div>
                    }
                    type="dropOffLocation"
                    name="dropOffLocation"
                    placeholder="Enter location"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={TimeIcon}
                          alt="time"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        pick-up time
                      </div>
                    }
                    type="pickupTime"
                    name="pickupTime"
                    placeholder="Enter time"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={InstructionIcon}
                          alt="instructions"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        Pick-up instrcutions
                      </div>
                    }
                    type="pickupInstructions"
                    name="pickupInstructions"
                    placeholder="Enter instructions"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <InputLabel id="loading" sx={{ color: 'white' }}>
                    <Box sx={accountLabelContainer}>
                      <img
                        src={LoadingIcon}
                        alt="loading"
                        width="30"
                        height="20"
                        sx={{ marginRight: '30px' }}
                      />
                      <Box>loading & offloading service</Box>
                    </Box>
                  </InputLabel>
                  <Select
                    variant="standard"
                    labelId="loading"
                    id="loading"
                    type="requireLoadingService"
                    sx={styledSelect}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={inputContainer}>
                <FormControl variant="standard">
                  <TextField
                    variant="standard"
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={PriceIcon}
                          alt="Price"
                          width="30"
                          height="20"
                          sx={{ marginRight: '30px' }}
                        />
                        price per load
                      </div>
                    }
                    type="pricePerLoad"
                    name="pricePerLoad"
                    placeholder="Enter price"
                  />
                </FormControl>
              </Stack>
            </Box>
          </div>
        </Card>
      </Box>
    </Box>
  );
};
export default ProposalPageForm;
