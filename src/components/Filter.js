import React from "react";

const Filter = ({ value, handleChange }) => {
  return (
    <div className="filter">
      <input value={value} onChange={handleChange} placeholder="Search" />
    </div>
  );
};

export default Filter;
