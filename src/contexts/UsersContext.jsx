import { createContext, useState, useEffect } from "react";
import questions from "../questions.json";
import { shuffle } from "../calculations";

export const UsersContext = createContext();

const UsersProvider = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [allOptions, setAllOptions] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const roundsToGo = 4;
  const [myAnswers, setMyAnswers] = useState({
    wrong: 0,
    right: 0,
    unanswered: 0,
  });

  const addToCount = () => {
    setQuestionNum(questionNum + 1);
  };

  useEffect(() => {
    if (questionNum < roundsToGo) {
      pickQuestion();
    } else {
      setGameStarted(false);
    }
    console.log(questionNum);
  }, [questionNum]);

  const pickQuestion = () => {
    console.log(myAnswers);

    let questionNumToCheck;
    do {
      questionNumToCheck = Math.floor(
        Math.random() * questions.questions.length
      );
    } while (usedQuestions.includes(questionNumToCheck));
    setCurrentQuestion(questions.questions[questionNumToCheck]);
    setUsedQuestions([...usedQuestions, questionNumToCheck]);
  };

  useEffect(() => {
    if (currentQuestion !== null) {
      setAllOptions(
        shuffle([...currentQuestion.wrongAnswers, currentQuestion.rightAnswer])
      );
    }
  }, [currentQuestion]);

  const checkAnswer = (answer) => {
    if (currentQuestion.rightAnswer === answer) {
      console.log("right!");
      myAnswers.right++;
      setMyAnswers({ ...myAnswers });
    } else {
      console.log("wrong!");
      myAnswers.wrong++;
      setMyAnswers({ ...myAnswers });
    }
    addToCount();
    setTimeLeft(15);
  };

  useEffect(() => {
    if (gameStarted) {
      pickQuestion();
    }
  }, [gameStarted]);

  const values = {
    gameStarted,
    setGameStarted,
    questionNum,
    setQuestionNum,
    pickQuestion,
    currentQuestion,
    addToCount,
    myAnswers,
    setMyAnswers,
    roundsToGo,
    timeLeft,
    setTimeLeft,
    checkAnswer,
    allOptions,
  };

  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
