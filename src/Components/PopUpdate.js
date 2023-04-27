import Btn from "./Btn";
import DropDown from "./DropDown";
import Heading from "./Heading";
import cancelIcon from "../asserts/cancel-icon.svg";
import { useState } from "react";

let PopUpdate = function ({ togglePopUpdate, newTaskData, editData }) {
  let options = ["Incomplete", "Completed"];
  let [inputData, setInputData] = useState(newTaskData.taskName);
  let [tagVal, setTagVal] = useState(newTaskData.tag);

  let onFormSubmit = function () {
    let newSamp = {
      ...newTaskData,
      taskName: inputData,
      tag: tagVal,
    };
    editData(newSamp);
  };
  return (
    <div>
      <div className="absolute top-0 left-0 bg-[rgba(0,0,0,.3)] h-full w-full z-10 flex justify-center items-center">
        <div className="bg-white py-4 px-5 rounded-md flex flex-col max-w-md gap-3">
          <div className="flex justify-between items-center">
            <div>
              <Heading title="Update Task" size="text-3xl" />
            </div>
            <img
              src={cancelIcon}
              alt="cancel Icon"
              className="h-12 p-px bg-gray-200 rounded-md cursor-pointer"
              onClick={togglePopUpdate}
            />
          </div>

          <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
            <input
              type="text"
              className="bg-gray-300 rounded-md py-2 px-2 focus:outline-none text-2xl font-semibold text-heading"
              placeholder="Task Name"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <DropDown options={options} handleChangeOpt={setTagVal} />
            <Btn name="Update Task" togglePopUp={onFormSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUpdate;
