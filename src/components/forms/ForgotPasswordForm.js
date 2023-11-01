import { React, useState } from 'react';
import { Box, FormControl, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '../../assets/phone.svg';
import { ForgotPasswordEndPoint } from '../../services/EndPoints';

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phone: '' });
  const [formErrors, setFormErrors] = useState({ phoneError: '' });

  const handleButtonClick = () => {
    //const { phone } = formData;
    const errors = {};

    // form validation
    if (!formData.phone) {
      errors.phoneError = 'Phone number is required';
    } else if (!/^[2]\d{10}$/.test(formData.phone)) {
      errors.phoneError = 'Phone number must start with 2 and be 11 digits long';
    }

    if (!/^\d+$/.test(formData.phone)) {
      errors.phoneError = 'Phone number can only contain digits';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      const user = sessionStorage.getItem('user');
      const dataToSend = {
        number: formData.phone,
        accountType: JSON.parse(user).profileType
      };

      console.log(dataToSend);
      //ApiRequest(formData);
    }
  };

  const ApiRequest = (formData) => {
    ForgotPasswordEndPoint(formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate('/onetimepin');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const styledFormControl = {
    width: '100%',
    color: 'white'
  };

  const styledTypography = {
    fontSize: 24,
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    fontWeight: 'bold',
    marginBottom: '50px'
  };

  const styledTextField = {
    width: '100%',
    '& input': {
      color: 'white',
      borderBottom: ' 3px solid white'
    },
    '& label': {
      color: 'white'
    },
    marginBottom: '10px'
  };

  const inputContainerBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px'
  };

  const styledSubmitButton = {
    fontSize: 18,
    backgroundColor: '#EBDBD5',
    width: '100%',
    borderRadius: '15px',
    height: '50px',
    color: '#58362A',
    fontWeight: '100',
    textTransform: 'none',
    marginBottom: '30px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  };

  return (
    <div>
      <Box>
        <FormControl sx={styledFormControl}>
          <Box sx={{ right: '10px !important' }}>
            <Typography sx={styledTypography}>Recover Account</Typography>
          </Box>
          <Box sx={inputContainerBox}>
            <TextField
              variant="standard"
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={PhoneIcon}
                    alt="Phone"
                    width="30"
                    height="20"
                    sx={{ marginRight: '30px' }}
                  />
                  Number
                </div>
              }
              type="phone"
              name="phone"
              placeholder="Enter your phone number"
              sx={styledTextField}
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                setFormErrors({ ...formErrors, phoneError: '' });
              }}
              error={!!formErrors.phoneError}
              helperText={formErrors.phoneError}
            />
          </Box>
          <Box>
            <Button
              variant="text"
              color="primary"
              type="submit"
              sx={styledSubmitButton}
              onClick={handleButtonClick}
            >
              Reset Password
            </Button>
            <Typography
              sx={
                (styledTypography,
                {
                  textAlign: 'center'
                })
              }
            >
              We will send an OTP to your number, to confirm the password reset
            </Typography>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
}

export default ForgotPasswordForm;
