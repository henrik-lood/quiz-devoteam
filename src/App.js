import { useContext, useEffect } from 'react'
import { UsersContext } from "./contexts/UsersContext";
import { Button } from './components/Button'
import { QuestionCard } from './components/QuestionCard';

function App() {
  const { 
    gameStarted,
    setGameStarted,
    questionNum,
    currentQuestion,
    pickQuestion,
  } = useContext(UsersContext);
  
  useEffect(()=>{
    if(gameStarted){
      pickQuestion()
    }
  }, [gameStarted])

  return (
    <div className="App">
      { !gameStarted && <Button text={"Start quiz!"} className={"startbutton"} onClick={() => setGameStarted(true)}/>}
      { gameStarted && currentQuestion && questionNum <= 10 && <QuestionCard question={currentQuestion} questionNum={questionNum}/> }
    </div>
  );
}

export default App;
