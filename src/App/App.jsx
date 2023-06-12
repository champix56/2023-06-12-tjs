import React, { useState } from 'react';
import './App.css';
import Button from './components/ui/Button/Button'
function App() {
  const [counter, setcounter] = useState(0)
  console.log('rendu')
  return (
    <div className="App">
      voici la valeur de counter : {counter}
      <hr />
      <Button className="error" onClick={() => {
        setcounter(counter - 1)
        console.log(counter)
      }}>-1</Button>
      <Button onClick={() => {
        setcounter(counter + 1)
        console.log(counter)
      }}>+1</Button>
    </div>
  );
}

export default App;
