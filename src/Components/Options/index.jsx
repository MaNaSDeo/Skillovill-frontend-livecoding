import React from "react";
import "./Options.css";

function Options({ option, text, checkedOption, handleOptionChange }) {
  return (
    <div className="option">
      <input
        type="radio"
        name="option"
        id={option}
        value={option}
        checked={checkedOption === option}
        onChange={handleOptionChange}
      />
      <span>{text}</span>
    </div>
  );
}

export default Options;
