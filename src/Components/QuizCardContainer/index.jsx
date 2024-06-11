import React, { useState } from "react";
import { quizData } from "../../quizData";
import QuizCard from "../QuizCard";
import Result from "../Result";

function QuizCardContainer() {
  const [queNo, setQueNo] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      {quizData.length &&
        quizData.map((obj, index) => {
          if (index === queNo)
            return (
              <QuizCard
                key={obj.question}
                data={obj}
                setQueNo={setQueNo}
                questionNo={index}
                setTotalCorrect={setTotalCorrect}
              />
            );
        })}
      {queNo === quizData.length && (
        <Result
          totalCorrect={totalCorrect}
          totalQuestion={quizData.length - 1}
        />
      )}
    </div>
  );
}

export default QuizCardContainer;
