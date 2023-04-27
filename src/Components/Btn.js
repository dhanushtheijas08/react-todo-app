let Btn = function ({ name, togglePopUp }) {
  return (
    <button
      className="bg-btn-color text-whitePrime py-2 px-4 text-2xl rounded-md"
      onClick={() => togglePopUp()}
    >
      {name}
    </button>
  );
};

export default Btn;
