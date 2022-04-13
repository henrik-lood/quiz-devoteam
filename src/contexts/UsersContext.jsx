import { createContext, useState, useEffect } from "react";
import questions from "../questions.json";
import { shuffle } from "../calculations";

export const UsersContext = createContext();

const UsersProvider = (props) => {
  const roundTime = 15; //sec
  const roundsToGo = 10;
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(roundTime);
  const [questionNum, setQuestionNum] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [allOptions, setAllOptions] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [myAnswers, setMyAnswers] = useState({
    wrong: 0,
    right: 0,
    unanswered: 0,
  });
  const timeToAdd = 10; //sec
  const [addTimeAvailable, setAddTimeAvailable] = useState(true);
  const [fiftyFiftyAvailable, setFiftyFiftyAvailable] = useState(true);

  useEffect(() => {
    if (gameStarted) {
      setQuestionNum(1);
      setMyAnswers({
        wrong: 0,
        right: 0,
        unanswered: 0,
      });
      setUsedQuestions([]);
      setAddTimeAvailable(true);
      setFiftyFiftyAvailable(true);
    }
  }, [gameStarted]);

  useEffect(() => {
    //after one question is answered, shoud a new be given, or shoud game end?
    if (questionNum <= roundsToGo) {
      pickQuestion();
    } else {
      setGameStarted(false);
    }
  }, [questionNum]);

  useEffect(() => {
    //when a new question is picked, shuffle the answers
    if (currentQuestion !== null) {
      setAllOptions(
        shuffle([...currentQuestion.wrongAnswers, currentQuestion.rightAnswer])
      );
    }
  }, [currentQuestion]);

  useEffect(() => {
    //if time runs out for a question
    if (timeLeft === 0) {
      myAnswers.unanswered++;
      setMyAnswers({ ...myAnswers });
      setTimeLeft(roundTime);
      addToRoundCount();
    }
  }, [timeLeft]);

  const addToRoundCount = () => {
    setQuestionNum(questionNum + 1); //increase round count
  };

  const pickQuestion = () => {
    let questionNumToCheck;
    do {
      questionNumToCheck = Math.floor(
        Math.random() * questions.questions.length
      );
    } while (usedQuestions.includes(questionNumToCheck));
    setCurrentQuestion(questions.questions[questionNumToCheck]);
    setUsedQuestions([...usedQuestions, questionNumToCheck]);
  };

  const checkAnswer = (answer) => {
    if (currentQuestion.rightAnswer === answer) {
      myAnswers.right++;
      setMyAnswers({ ...myAnswers });
    } else {
      myAnswers.wrong++;
      setMyAnswers({ ...myAnswers });
    }
    setTimeLeft(roundTime);
    addToRoundCount();
  };

  const addTime = (time) => {
    setTimeLeft(timeLeft + time);
    setAddTimeAvailable(false);
  };

  const fiftyFifty = () => {
    const indexToUse = Math.floor(
      Math.random() * currentQuestion.wrongAnswers.length
    );
    setAllOptions(
      shuffle([
        currentQuestion.rightAnswer,
        currentQuestion.wrongAnswers[indexToUse],
      ])
    );
    setFiftyFiftyAvailable(false);
  };

  const values = {
    gameStarted,
    setGameStarted,
    questionNum,
    setQuestionNum,
    pickQuestion,
    currentQuestion,
    myAnswers,
    setMyAnswers,
    roundsToGo,
    timeLeft,
    setTimeLeft,
    checkAnswer,
    allOptions,
    addTime,
    addTimeAvailable,
    setAddTimeAvailable,
    fiftyFiftyAvailable,
    setFiftyFiftyAvailable,
    timeToAdd,
    fiftyFifty,
  };

  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
