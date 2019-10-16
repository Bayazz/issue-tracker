import React from "react";

const Select = ({ name, handleInput, options, id }) => {
  let optionNumber = 1;
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <select
        name={name}
        className="form-control"
        id={id}
        onChange={handleInput}
      >
        {options.map(choice => (
          <option key={name + optionNumber++}>{choice}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
