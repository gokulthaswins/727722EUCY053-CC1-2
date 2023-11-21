import React, { useState } from 'react';
import './App.css'

const CenteredTextArea = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          width: '300px',
          height: '150px',
          margin: '0 auto', 
          display: 'block', 
        }}
      />
      <p>Current value: {inputValue}</p>
    </div>
  );
};

export default CenteredTextArea;
