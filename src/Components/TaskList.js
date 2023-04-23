import Task from "./Task";

let TaskList = function({taskList}) {

  let renderList = taskList.map((item,index) => <Task taskList={item} key={index}/>)
  return (
    <div className="bg-list-box-bg py-6 px-4 rounded-md max-w-3xl mx-auto flex flex-col gap-4">
      {renderList}
    </div>
  )
}

export default TaskList;