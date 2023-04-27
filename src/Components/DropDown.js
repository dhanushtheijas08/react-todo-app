import React, { useState } from "react";

function DropDown({ options, handleChangeOpt }) {
  const [selectedOption, setSelectedOption] = useState(options.at(0));

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleChangeOpt(event.target.value);
  };

  let allOptions = options.map((opt, i) => (
    <option value={opt} key={i}>
      {opt}
    </option>
  ));

  return (
    <div>
      <select
        id="options"
        value={selectedOption}
        onChange={handleChange}
        className="w-full bg-[#cccdde] text-2xl py-2 px-1 rounded-md focus:outline-none"
      >
        {allOptions}
      </select>
    </div>
  );
}

export default DropDown;
