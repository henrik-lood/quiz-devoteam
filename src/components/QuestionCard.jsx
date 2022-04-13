import React, { useContext } from "react";
import { Button } from "../components/Button";
import { UsersContext } from "../contexts/UsersContext";
import { Timer } from "./Timer";
import styles from "./QuestionCard.module.css";

export const QuestionCard = ({ questionNum, question }) => {
  const { allOptions, timeLeft, setTimeLeft, checkAnswer } =
    useContext(UsersContext);

  return (
    <>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <h1 className={styles.heading}>{`Question ${questionNum}`}</h1>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>{question.question}</h2>
        <div className={styles.optionsContainer}>
          {allOptions.map((answer, index) => (
            <Button
              key={index}
              text={answer}
              className={"answer"}
              onClick={() => checkAnswer(answer)}
              disabled={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};
