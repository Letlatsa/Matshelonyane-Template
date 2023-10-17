import React from 'react';

function ProgressBar({ currentStep }) {
  const steps = [1, 2, 3];
  const stepColors = ['#FFEB22', '#808080', '#808080'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-20px' }}>
      {steps.map((step, index) => (
        <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: stepColors[index],
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '15px',
              fontSize: '20px'
            }}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div
              style={{
                width: '50px',
                height: '4px',
                backgroundColor: stepColors[index],
                margin: '0 5px',
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
