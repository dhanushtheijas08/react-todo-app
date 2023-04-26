import React, { useState } from "react";

function DropDown({ filterBy }) {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    filterBy(event.target.value);
  };

  return (
    <div>
      <select
        id="options"
        value={selectedOption}
        onChange={handleChange}
        className="w-fit bg-[#cccdde] text-2xl py-2 rounded-md focus:outline-none"
      >
        <option value="all">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default DropDown;
