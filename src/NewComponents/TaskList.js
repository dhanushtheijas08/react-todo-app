import Task from "./Task";

let TaskList = function ({
  taskList,
  handleDeleteBtn,
  handleEditBtn,
}) {
  let renderList = taskList.map((item, index) => (
    <Task
      taskList={item}
      key={index}
      handleDeleteBtn={handleDeleteBtn}
      handleEditBtn={handleEditBtn}
    />
  ));
  return (
    <div className="bg-list-box-bg py-6 px-4 rounded-md max-w-3xl mx-auto flex flex-col gap-4">
      {renderList.length !== 0 ? (
        renderList
      ) : (<p className="max-w-fit py-2 px-4 bg-gray-500 text-2xl text-white mx-auto rounded-md"> No Task </p>)}
    </div>
  );
};

export default TaskList;
