import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'
function App() {
  return (
    <div className="App">
      <Button ><img src='/img/ok_sub.png'/> ok</Button>
      <Button text="cancel"/>
    </div>
  );
}

export default App;
