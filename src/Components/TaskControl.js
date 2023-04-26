import DropDown from "./DropDown";

let TaskControl = function () {
  let options = ["All", "InComplete", "Completed"];
  return (
    <div>
      <button className="">Add Task</button>
      <DropDown options={options} />
    </div>
  );
};

export default TaskControl;
