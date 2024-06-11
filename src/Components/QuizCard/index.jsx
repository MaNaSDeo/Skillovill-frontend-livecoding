import React, { useState } from "react";
import Options from "../Options";
import "./QuizCard.css";

function QuizCard({ data, questionNo, setQueNo, setTotalCorrect }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = () => {
    const isCorrect = data.correct === selectedOption;

    if (isCorrect) {
      setTotalCorrect((prevTotalCorrect) => prevTotalCorrect + 1);
    }

    setQueNo(questionNo + 1);
  };

  return (
    <div className="card">
      <div className="question">{data.question}</div>
      <div>
        <Options
          option="a"
          text={data.a}
          checkedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <Options
          option="b"
          text={data.b}
          checkedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <Options
          option="c"
          text={data.c}
          checkedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <Options
          option="d"
          text={data.d}
          checkedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      </div>
      <button
        onClick={handleClick}
        className="submitBtn"
        disabled={!selectedOption}
      >
        Submit
      </button>
    </div>
  );
}

export default QuizCard;
