import  { useState } from 'react';

import './App.css'; 



// Child functional component

const Child = ({ inputValue, onInputChange }) => {
  return (
    <div className="child">
      <label>Child Component:</label>
      <input type="text" value={inputValue} onChange={onInputChange} />
    </div>
  );
};

// Parent functional component
const Parent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="parent">
      <label>Parent Component:</label>
      <Child inputValue={inputValue} onInputChange={handleInputChange} />
      <p>Parent State: {inputValue}</p>
    </div>
  );
};

export default Parent;
