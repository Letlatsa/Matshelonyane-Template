import React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import { Typography } from '@mui/material';

function ProgressBar({ currentStep }) {
  const stepColors = ['#C69585', '#525252', '#525252'];

  const styledStep1 = {
    width: '30px',
    height: '30px',
    backgroundColor: stepColors[0],
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    marginBottom: '10px'
  };

  const styledStep = {
    width: '30px',
    height: '30px',
    backgroundColor: stepColors[1],
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    marginBottom: '10px'
  };

  const styledStepCurrent = {
    width: '30px',
    height: '30px',
    backgroundColor: stepColors[0],
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    marginBottom: '10px'
  };

  const styeldStepBar = {
    width: '10vw',
    height: '4px',
    backgroundColor: stepColors[1],
    margin: '0 3vw',
    marginTop: '15px'
  };

  const styeldStepBarActive = {
    width: '10vw',
    height: '4px',
    backgroundColor: stepColors[0],
    margin: '0 3vw',
    marginTop: '15px'
  };

  const styledOptionContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  };

  const styledTypography = {
    color: '#fff',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: 'Lato',
    fontWeight: 500,
    fontSize: '14px',
    textAlign: 'center'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={styledOptionContainer}>
          <div style={styledStep1}>{currentStep === 2 ? <CheckIcon /> : 1}</div>
          <Typography sx={styledTypography}>Profile setup</Typography>
        </div>
        <div style={currentStep === 2 ? styeldStepBarActive : styeldStepBar} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={styledOptionContainer}>
          <div style={currentStep === 2 ? styledStepCurrent : styledStep}>
            {currentStep === 3 ? <CheckIcon /> : 2}
          </div>
          <Typography sx={styledTypography}>Profile setup</Typography>
        </div>
        <div style={currentStep === 3 ? styeldStepBarActive : styeldStepBar} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={styledOptionContainer}>
          <div style={currentStep === 3 ? styledStepCurrent : styledStep}>
            {currentStep === 3 ? <CheckIcon /> : 3}
          </div>
          <Typography sx={styledTypography}>Profile setup</Typography>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
