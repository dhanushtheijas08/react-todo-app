import AddFilter from "./Components/AddFIlter"
import Heading from "./Components/Heading"
import TaskList from "./Components/TaskList"


export default function App() {
  let taskList = {
    "taskName": "Task 1",
    "date": new Date().toLocaleDateString("en-IN"),
    "time": new Date().toLocaleTimeString("en-IN", { hour12: true }),
  };
  
  return (
    <div className="px-6 py-8">
      <Heading />
      <AddFilter />
      <TaskList taskList={taskList}/>
    </div>
  )
}

