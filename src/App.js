import Heading from "./Components/Heading";
import Popup from "./Components/PopUp";
import PopUpdate from "./Components/PopUpdate";
import TaskControl from "./Components/TaskControl";
import TaskList from "./Components/TaskList";
import { useState } from "react";
let App = function () {
  let [isPopUp, setIsPopUp] =  useState (false);
  let togglePopUp = () => setIsPopUp((prev) => !prev);
  let [isPopUpdate, setIsPopUpdate] = useState(false);
  let togglePopUpdate = () => setIsPopUpdate((prev) => !prev);

  let [newTaskData, setNewTaskData] = useState({});

  let [tasks, setTasks] =  useState([]);
  let addNewData = function (newData) {
    setTasks((prev) => [newData, ...prev]);
  };

  let deleteData = function (taskId) {
    setTasks((prev) => {
      let newData = prev.filter((item) => item.taskId !== taskId);
      return newData;
    });
  };

  let editData = function (newTaskDetials) {
    setTasks((prev) => {
      let newData = prev.map((item) => {
        if (newTaskDetials.taskId === item.taskId) {
          return {
            ...item,
            ...newTaskDetials,
          };
        }
        return item;
      });
      console.log(newData);
      return newData;
    });
    togglePopUpdate();
  };

  let deleteAll = function() {
    setTasks([])
  }

  let taskCompleted = function (taskId) {
    setTasks((prev) => {
      let newData = prev.map((item) => {
        if (taskId === item.taskId) {
          let newTag = item.tag === "Incomplete" ? "Completed" : "Incomplete";
          let newIschecked = item.ischecked === true ? false : true;
          return {
            ...item,
            tag: newTag,
            ischecked: newIschecked,
          };
        }
        return item;
      });
      console.log(newData);
      return newData;
    });
  };

  return (
    <div className="p-6">
      {isPopUp && <Popup togglePopUp={togglePopUp} addNewData={addNewData} />}
      {isPopUpdate && (
        <PopUpdate
          togglePopUpdate={togglePopUpdate}
          editData={editData}
          newTaskData={newTaskData}
        />
      )}
      <Heading title="TODO List" size="text-5xl" />
      <TaskControl togglePopUp={togglePopUp} deleteAll={deleteAll}/>
      <TaskList
        tasks={tasks}
        deleteData={deleteData}
        togglePopUpdate={togglePopUpdate}
        setNewTaskData={setNewTaskData}
        taskCompleted={taskCompleted}
      />
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
