import React, { useContext } from "react";
import { Button } from "../components/Button";
import { UsersContext } from "../contexts/UsersContext";
import { Timer } from "./Timer";
export const QuestionCard = ({ questionNum, question }) => {
  const { allOptions, timeLeft, setTimeLeft, checkAnswer } =
    useContext(UsersContext);

  return (
    <>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <h1>{`Question ${questionNum}`}</h1>
      <div className="questionContainer">
        <h2>{question.question}</h2>
        <div className="answersContainer">
          {allOptions.map((answer, index) => (
            <Button
              key={index}
              text={answer}
              className={answer}
              onClick={() => checkAnswer(answer)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
