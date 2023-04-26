import React, { useState } from "react";

function DropDown({options}) {
  const [selectedOption, setSelectedOption] = useState(options.at(0));

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let allOptions = options.map((opt) => <option value={opt}>{opt}</option>);

  return (
    <div>
      <select
        id="options"
        value={selectedOption}
        onChange={handleChange}
        className="w-fit bg-[#cccdde] text-2xl py-2 px-1 rounded-md focus:outline-none"
      >
        {allOptions}
      </select>
    </div>
  );
}

export default DropDown;
