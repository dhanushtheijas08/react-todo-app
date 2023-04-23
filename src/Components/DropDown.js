import React, { useState } from 'react';

function DropDown() {
  const [selectedOption, setSelectedOption] = useState('All');

  const handleChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  return (
    <div>
      <select id="options" value={selectedOption} onChange={handleChange} className='w-fit bg-[#cccdde] text-2xl py-2 rounded-md focus:outline-none'>
        <option value="option1">All</option>
        <option value="option2">Completed</option>
        <option value="option3">Incomplete</option>
      </select>
    </div>
  );
}

export default DropDown;