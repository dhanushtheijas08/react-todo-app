import Task from "./Task";

let TaskList = function ({ tasks,deleteData }) {
  let renderTask = tasks.map((item,i) => <Task task={item} key={i} deleteData={deleteData}/>);
  let renderTaskLen = renderTask.length;

  return (
    <div className="bg-lightGray max-w-3xl mx-auto rounded-md flex flex-col gap-4 py-4 px-4">
      {renderTaskLen !== 0 ? (
        renderTask
      ) : (
        <p className="max-w-fit py-2 px-4 bg-gray-500 text-2xl text-white mx-auto rounded-md">
          No Task
        </p>
      )}
    </div>
  );
};

export default TaskList;
/*


    <div className="bg-list-box-bg py-6 px-4 rounded-md max-w-3xl mx-auto flex flex-col gap-4">
      {renderList.length !== 0 ? (
        renderList
      ) : (<p className="max-w-fit py-2 px-4 bg-gray-500 text-2xl text-white mx-auto rounded-md"> No Task </p>)}
    </div>


*/
