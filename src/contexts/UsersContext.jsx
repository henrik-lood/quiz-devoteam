import { createContext, useState, useEffect } from "react";
import questions from "../questions.json";

export const UsersContext = createContext();

const UsersProvider = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);
  const [questionsUsed, setQuestionsUsed] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const pickQuestion = () => {
    // while(questionsUsed){
    console.log("pickQuestion");

    const questionNumToCheck = Math.floor(
      Math.random() * questions.questions.length
    );
    // }
    setCurrentQuestion(questions.questions[questionNumToCheck]);
  };

  useEffect(() => {
    console.log(currentQuestion);
  }, [currentQuestion]);

  const values = {
    gameStarted,
    setGameStarted,
    questionNum,
    setQuestionNum,
    pickQuestion,
    currentQuestion,
  };

  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
