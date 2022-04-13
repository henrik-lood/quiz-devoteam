import React from "react";
import styles from "./Results.module.css";

export const Results = ({ myAnswers }) => {
  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.resultHeading}>How did you do?</h1>
      <div className={styles.answersContainer}>
        <h2 className={styles.answers}>
          {`Right answers:`}{" "}
          <span className={styles.number}> {` ${myAnswers.right}`}</span>
        </h2>
        <h2 className={styles.answers}>
          {`Wrong answers:`}{" "}
          <span className={styles.number}> {` ${myAnswers.wrong}`}</span>
        </h2>
        <h2 className={styles.answers}>
          {`Unanswered answers:`}{" "}
          <span className={styles.number}>{` ${myAnswers.unanswered}`}</span>
        </h2>
      </div>
    </div>
  );
};
