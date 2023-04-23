import { useState } from "react";
import AddFilter from "./Components/AddFIlter";
import Heading from "./Components/Heading";
import TaskList from "./Components/TaskList";

export default function App() {
  let [taskno, setTask] = useState([

  ]);

  let handleAddbtn = function () {
    setTask((prev) => {
      return [
        ...prev,
        {
          taskName: `Task ${prev.length + 1}`,
          date: new Date().toLocaleDateString("en-IN"),
          time: new Date().toLocaleTimeString("en-IN", { hour12: true }),
        },
      ];
    });
  };

  let handleDeleteBtn = function (taskName) {
    let newList = taskno.filter((item) => item.taskName !== taskName);
    setTask(newList);
  };

  return (
    <div className="px-6 py-8">
      <Heading />
      <AddFilter handleAddbtn={handleAddbtn}/>
      <TaskList taskList={taskno} handleDeleteBtn={handleDeleteBtn}/>
    </div>
  );
}
