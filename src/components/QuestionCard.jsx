import React, { useContext } from "react";
import { shuffle } from "../calculations";
import { Button } from "../components/Button";
import { UsersContext } from "../contexts/UsersContext";

export const QuestionCard = ({ questionNum, question }) => {
  const { pickQuestion } = useContext(UsersContext);

  const allOptions = shuffle([...question.wrongAnswers, question.rightAnswer]);

  const checkAnswer = (answer) => {
    if (question.rightAnswer === answer) {
      console.log("right!");
    } else {
      console.log("wrong!");
    }
    pickQuestion();
  };

  return (
    <>
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
