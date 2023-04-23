import React, { useState } from 'react';

function PopUpDropDown() {
  const [selectedOption, setSelectedOption] = useState('All');

  const handleChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  return (
    <div>
      <select id="options" value={selectedOption} onChange={handleChange} className= 'w-full bg-gray-300 text-2xl py-2 rounded-md text-heading font-semibold focus:outline-none'>
        <option value="all">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default PopUpDropDown;