import React, { useContext } from 'react'
import { UsersContext } from "./contexts/UsersContext";
import { Button } from './components/Button'
import { QuestionCard } from './components/QuestionCard';
import styles from './App.module.css'
import {Results} from './components/Results'

function App() {
  const { 
    gameStarted,
    setGameStarted,
    questionNum,
    currentQuestion,
    myAnswers,
    roundsToGo,
    timeToAdd,
    addTimeAvailable,
    fiftyFiftyAvailable,
    addTime,
    fiftyFifty,
  } = useContext(UsersContext);

  return (
    <div className={questionNum > roundsToGo ? styles.appContainerResult : styles.appContainerStart}>
      
        { gameStarted && currentQuestion && questionNum <= roundsToGo &&
      <div className={styles.questionContainer}>
          <QuestionCard question={currentQuestion} questionNum={questionNum}/>
        <div className={styles.lifelineContainer}>
          { gameStarted && <Button text={"+10 sec"} className={"lifeline"} onClick={() => addTime(timeToAdd)} disabled={!addTimeAvailable}/>}
          { gameStarted && <Button text={"50/50"} className={"lifeline"} onClick={() => fiftyFifty()} disabled={!fiftyFiftyAvailable}/>}
        </div>
      </div>
        }
      { !gameStarted && questionNum >= roundsToGo &&
      <Results className={styles.resultsContainer} myAnswers={myAnswers}/>
      }
      { !gameStarted && 
      <div className={questionNum > roundsToGo ? styles.buttonContainerRestart : styles.buttonContainerStart}>
        <Button text={questionNum > roundsToGo ? "Quiz again!" : "Start quiz!"} className={questionNum > roundsToGo ? "restartButton" : "startButton"} onClick={() => setGameStarted(true)}/>
        </div>
        }
    </div>
  );
}

export default App;
