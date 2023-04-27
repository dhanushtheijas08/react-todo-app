import React, { useState } from "react";
import "../index.css";
import deletIcon from "../asserts/delete-icon.svg";
import editIcon from "../asserts/edit-icon.svg";

let Task = function ({ taskList, handleDeleteBtn, handleEditBtn }) {
  let [isChecked, setIsChecked] = useState(false);
  let handleChecked = function () {
    setIsChecked((prev) => !prev);
    taskList.ischecked = isChecked;
    console.log(taskList);
  };

  let deleteBtn = function () {
    handleDeleteBtn(taskList.taskName);
  };

  let editBtn = function () {
    handleEditBtn();
  };

  return (
    <div className="bg-white rounded-md flex items-center justify-between h-14 px-4">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-10 h-7 bg-list-box-bg outline-none check-box"
          onClick={handleChecked}
        />

        
        <div className="flex flex-col">
          {isChecked === true ? (
            <s className="text-sm line-through decoration-inherit decoration-1">
              {taskList.taskName}
            </s>
          ) : (
            <h4 className="text-sm">{taskList.taskName}</h4>
          )}
          <p className="text-xs">{`${taskList.date} ${taskList.time}`}</p>
        </div>
      </div>


      <div className="flex">
        <img
          src={deletIcon}
          alt="delet icon"
          className="cursor-pointer h-8"
          onClick={deleteBtn}
        />
        <img
          src={editIcon}
          alt="edit icon"
          className="h-8 cursor-pointer"
          onClick={editBtn}
        />
      </div>
    </div>
  );
};

export default Task;
