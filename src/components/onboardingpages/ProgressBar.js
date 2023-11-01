import React from 'react';

function ProgressBar({ currentStep }) {
  const steps = [1, 2, 3];
  const stepColors = ['#C69585', '#525252', '#525252'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {steps.map((step, index) => (
        <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: stepColors[index],
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '20px'
            }}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div
              style={{
                width: '10vw',
                height: '4px',
                backgroundColor: stepColors[index],
                margin: '0 6vw',
                marginTop: '15px'
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
