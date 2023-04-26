import React from "react";

function PopUpDropDown({ handleChange, selectedOption }) {
  return (
    <div>
      <select
        id="options"
        value={selectedOption}
        onChange={handleChange}
        className="w-full bg-gray-300 text-2xl py-2 rounded-md text-heading font-semibold focus:outline-none"
      >
        <option value="Incomplete">Incomplete</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}

export default PopUpDropDown;
