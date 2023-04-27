import deletIcon from "../asserts/delete-icon.svg";
import editIcon from "../asserts/edit-icon.svg";

let Task = function ({ task, deleteData, togglePopUpdate, setNewTaskData }) {
  let updateUi = function () {
    togglePopUpdate();
    setNewTaskData(task);
  };
  return (
    <div className="bg-whitePrime w-full rounded-md px-3 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <input type="checkbox" id={task.taskId} />

        <div className="flex flex-col">
          <label
            htmlFor={task.taskId}
            className="text-sm font-semibold"
          >{`${task.taskName}`}</label>
          <label
            htmlFor={task.taskId}
            className="text-xs"
          >{`${task.date} ${task.time}`}</label>
        </div>
      </div>

      <div className="flex gap-2">
        <img
          src={deletIcon}
          alt="delet icon"
          className="cursor-pointer h-8 "
          onClick={() => deleteData(task.taskId)}
        />
        <img
          src={editIcon}
          alt="edit icon"
          className="h-8 cursor-pointer"
          onClick={updateUi}
        />
      </div>
    </div>
  );
};

export default Task;
