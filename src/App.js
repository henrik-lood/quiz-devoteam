import { useContext } from 'react'
import { UsersContext } from "./contexts/UsersContext";
import { Button } from './components/Button'
import { QuestionCard } from './components/QuestionCard';

function App() {
  const { 
    gameStarted,
    setGameStarted,
    questionNum,
    currentQuestion,
    myAnswers,
    roundsToGo,
    addTime,
    timeToAdd,
    usedAddTime,
    fiftyFifty,
    usedFiftyFifty,
  } = useContext(UsersContext);

  return (
    <div className="App">
      { !gameStarted && <Button text={"Start quiz!"} className={"startbutton"} onClick={() => setGameStarted(true)}/>}
      { gameStarted && currentQuestion && questionNum < roundsToGo &&
      <>
        <QuestionCard question={currentQuestion} questionNum={questionNum}/>
      </>
      }
      { gameStarted && !usedAddTime && <Button text={"+10 sec"} className={"lifeline"} onClick={() => addTime(timeToAdd)}/>}
      { gameStarted && !usedFiftyFifty && <Button text={"50/50"} className={"lifeline"} onClick={() => fiftyFifty()}/>}
      
      { !gameStarted && questionNum >= roundsToGo &&
        <>
          <h1>How did you do?</h1>
          <div>
            <h2>{`Right answers: ${myAnswers.right}`}</h2>
            <h2>{`Wrong answers: ${myAnswers.wrong}`}</h2>
            <h2>{`Unanswered answers: ${myAnswers.unanswered}`}</h2>
          </div>
        </>
      }
    </div>
  );
}

export default App;
