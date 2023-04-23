import DropDown from "./DropDown";

let AddFilter = function ({ handleAddbtn }) {
  return (
    <div className="flex justify-between items-center max-w-3xl mx-auto my-6">
      <button
        className="w-fit bg-primaryPurple text-white py-2 px-5 text-2xl rounded-md hover:bg-btn-hover"
        onClick={function () {
          handleAddbtn();
        }}
      >
        Add Task
      </button>
      <DropDown />
    </div>
  );
};

export default AddFilter;
