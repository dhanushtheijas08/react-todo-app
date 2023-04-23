import Task from "./Task";

let TaskList = function({taskList}) {
  return (
    <div className="bg-list-box-bg py-6 px-4 rounded-md max-w-3xl mx-auto">
      <Task taskList={taskList}/>
    </div>
  )
}

export default TaskList;