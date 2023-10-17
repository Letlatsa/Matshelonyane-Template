import React from 'react';

function ProgressBar({ currentStep }) {
  const numberOfSteps = 3;
  const progressWidth = (currentStep / numberOfSteps) * 100;

  return (
    <div style={{ width: '100%', backgroundColor: '#ccc' }}>
      <div
        style={{
          width: `${progressWidth}%`,
          backgroundColor: '#FFEB22',
          height: '10px'
        }}
      />
    </div>
  );
}

export default ProgressBar;
