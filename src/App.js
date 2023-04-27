import Heading from "./Components/Heading";
import Popup from "./Components/PopUp";
import TaskControl from "./Components/TaskControl";
import TaskList from "./Components/TaskList";
import { useState } from "react";
let App = function () {
  let [isPopUp, setIsPopUp] = useState(false);
  let togglePopUp = () => setIsPopUp((prev) => !prev);

  let [tasks, setTasks] = useState([]);
  let updateData = function (newData) {
    setTasks((prev) => [newData, ...prev]);
  };

  return (
    <div className="p-6">
      {isPopUp && <Popup togglePopUp={togglePopUp} updateData={updateData} />}
      <Heading title="TODO List" size="text-5xl" />
      <TaskControl togglePopUp={togglePopUp} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;

/*

let task = [
  {
    taskName : "Sample 1",
    date: new Date().toLocaleDateString("en-IN"),
    time: new Date().toLocaleTimeString("en-IN", { hour12: true }),
    tag: selectedOption,
    ischecked: false,
    taskId: Math.floor(Math.random() * 100000),
  }
]



*/
