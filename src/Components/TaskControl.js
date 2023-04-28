import Btn from "./Btn";

let TaskControl = function ({ togglePopUp, deleteAll }) {
  // let options = ["All", "InComplete", "Completed"];
  return (
    <div className="flex max-w-3xl justify-between mx-auto my-10">
      <Btn name="Add Task" togglePopUp={togglePopUp} />
      <Btn name="Delete All" togglePopUp={deleteAll} />
    </div>
  );
};

export default TaskControl;
