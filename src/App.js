import { useState } from "react";
import AddFilter from "./Components/AddFIlter";
import Heading from "./Components/Heading";
import TaskList from "./Components/TaskList";
import PopUpWindow from "./Components/PopUpWindow";

export default function App() {
  let [taskno, setTask] = useState([]);
  let [popUp, setPopUp] = useState(false);

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
    setTask((prev) => {
      let newList = prev.filter((item) => item.taskName !== taskName);
      return newList;
    });
  };

  let handleEditBtn = function (oldTaskName, newTaskName) {
    setTask((prev) => {
      let newList = prev.map((item) => {
        if (item.taskName === oldTaskName)
          return {
            ...item,
            taskName: newTaskName,
          };
        else return { ...item };
      });

      return newList;
    });
  };

  let handlePopUp = function () {
    setPopUp((prev) => !prev);
  };

  return (
    <div className="px-6 py-8">
      {popUp && <PopUpWindow handlePopUp={handlePopUp} />}
      <Heading />
      <AddFilter handleAddbtn={handleAddbtn} handlePopUp={handlePopUp} />
      <TaskList
        taskList={taskno}
        handleDeleteBtn={handleDeleteBtn}
        handleEditBtn={handleEditBtn}
      />
    </div>
  );
}
