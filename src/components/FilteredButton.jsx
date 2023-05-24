import React from "react";

const FilteredButton = ({ filtered, onClick, bgActive }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgActive} font-bold text-[10px] md:text-sm rounded-2xl px-3 py-1 text-white uppercase hover:bg-teal-600`}
    >
      {filtered}
    </button>
  );
};

export default FilteredButton;
