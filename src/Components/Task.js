import "../index.css";
import deletIcon from "../asserts/delete-icon.svg";
import editIcon from "../asserts/edit-icon.svg";

let Task = function ({taskList}) {

  return (
    <div className="bg-white rounded-md flex items-center justify-between h-14 px-4">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-10 h-7 bg-list-box-bg outline-none check-box"
        />
        <div className="flex flex-col">
          <h4 className="text-sm">{taskList.taskName}</h4>
          <p className="text-xs">
           { `${taskList.date} ${taskList.time}`}
          </p>
        </div>
      </div>
      <div className="flex">
        <img src={deletIcon} alt="delet icon" className="cursor-pointer h-9" />
        <img src={editIcon} alt="edit icon" className="h-9 cursor-pointer " />
      </div>
    </div>
  );
};

export default Task;
