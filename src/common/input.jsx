import React from "react";

const Input = ({ name, placeholder, handleInput, value, id }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <input
        name={name}
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={handleInput}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
