import React from "react";

const FilteredButton = ({ filtered, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-400 font-bold text-sm rounded-2xl px-3 py-1 text-white uppercase hover:bg-teal-600"
    >
      {filtered}
    </button>
  );
};

export default FilteredButton;
