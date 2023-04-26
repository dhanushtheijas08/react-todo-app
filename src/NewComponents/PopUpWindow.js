import { useState } from "react";
import cancelIcon from "../asserts/cancel-icon.svg";
import "../index.css";
import PopUpDropDown from "./PopUpDropDown";
let PopUpWindow = function ({ handlePopUp, handleAddbtn, headingName }) {
  let [newTaskName, setTaskName] = useState("");
  let updateText = function (event) {
    setTaskName(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("Incomplete");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let getFormData = function (event) {
    event.preventDefault();
    let newData = {
      taskName: newTaskName,
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN", { hour12: true }),
      tag: selectedOption,
      ischecked: false,
      taskId: Math.floor(Math.random() * 100),
    };
    handleAddbtn(newData);
    handlePopUp();
  };
  return (
    <div className="absolute top-0 left-0 bg-[rgba(0,0,0,.3)] h-full w-full z-10 flex justify-center items-center">
      <div className="bg-white py-4 px-5 rounded-md flex flex-col max-w-md gap-3">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-4xl font-sans text-heading">
            {headingName}
          </h2>
          <img
            src={cancelIcon}
            alt="cancel Icon"
            className="h-12 p-px bg-gray-200 rounded-md cursor-pointer"
            onClick={handlePopUp}
          />
        </div>

        <form className="flex flex-col gap-4" onSubmit={getFormData}>
          <input
            type="text"
            className="bg-gray-300 rounded-md py-2 px-2 focus:outline-none text-2xl font-semibold text-heading"
            onChange={updateText}
            value={newTaskName}
            placeholder="Task Name"
          />
          <PopUpDropDown
            handleChange={handleChange}
            selectedOption={selectedOption}
          />
          <button className="text-2xl bg-primaryPurple text-white font-semibold rounded-md py-1 px-3">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpWindow;
