import Btn from "./Btn";
import DropDown from "./DropDown";

let TaskControl = function ({togglePopUp}) {
  let options = ["All", "InComplete", "Completed"];
  return (
    <div className="flex max-w-3xl justify-between mx-auto my-10">
      <Btn name="Add Task" togglePopUp={togglePopUp}/> 
      <DropDown options={options} />
    </div>
  );
};

export default TaskControl;
