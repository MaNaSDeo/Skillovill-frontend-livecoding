import React from "react";

function Result({ totalCorrect, totalQuestion }) {
  return (
    <div className="card">
      <p className="question">
        You answered correctly at {totalCorrect}/{totalQuestion} questions.
      </p>
      <button className="submitBtn" onClick={() => window.location.reload()}>
        Reload
      </button>
    </div>
  );
}

export default Result;
