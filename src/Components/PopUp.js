import cancelIcon from "../assets/cancel-icon.svg";
import Heading from "./Heading";
import Btn from "./Btn";
import DropDown from "./DropDown";
import { useState } from "react";
let Popup = function ({ togglePopUp, addNewData }) {
  let options = ["Incomplete", "Completed"];
  let [inputData, setInputData] = useState("");
  let [tagVal, setTagVal] = useState(options.at(0));

  let changeOption = function (data) {
    setTagVal(data);
  };
  let updateValue = function () {
    let newSamp = {
      taskName: inputData,
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN", { hour12: true }),
      tag: tagVal,
      ischecked: false,
      taskId: Math.floor(Math.random() * 100000),
    };
    addNewData(newSamp);
  };

  let submitForm = function () {
    updateValue();
    togglePopUp();
  };

  return (
    <div className="absolute top-0 left-0 bg-[rgba(0,0,0,.3)] h-full w-full z-10 flex justify-center items-center">
      <div className="bg-white py-4 px-5 rounded-md flex flex-col max-w-md gap-3">
        <div className="flex justify-between items-center">
          <div>
            <Heading title="Add Task" size="text-3xl" />
          </div>
          <img
            src={cancelIcon}
            alt="cancel Icon"
            className="h-12 p-px bg-gray-200 rounded-md cursor-pointer"
            onClick={togglePopUp}
          />
        </div>

        <form className="flex flex-col gap-4" onSubmit={submitForm}>
          <input
            type="text"
            className="bg-gray-300 rounded-md py-2 px-2 focus:outline-none text-2xl font-semibold text-heading"
            placeholder="Task Name"
            onChange={(event) => setInputData(event.target.value)}
            value={inputData}
          />
          <DropDown options={options} handleChangeOpt={changeOption} />
          <Btn name="Add Task" togglePopUp={submitForm} />
        </form>
      </div>
    </div>
  );
};

export default Popup;
