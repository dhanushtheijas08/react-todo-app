import Heading from "./Components/Heading";
import TaskControl from "./Components/TaskControl";

let App = function () {
  return (
    <div className="p-6">
      <Heading title="TODO List"/>
      <TaskControl />
    </div>
  );
};

export default App;
