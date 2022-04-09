import { useContext } from 'react'
import { UsersContext } from "./contexts/UsersContext";

function App() {
  const { test } = useContext(UsersContext);
  console.log(test)
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
