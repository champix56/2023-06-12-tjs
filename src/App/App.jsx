import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'
function App() {
  return (
    <div className="App">
      <Button className="primary" onClick={(unParamDeLenfant)=>{
        console.log('fonction envoyee part la parent',unParamDeLenfant)
      }}  ><img src='/img/ok_sub.png'  alt=''/> ok</Button>
      <Button className="error" >cancel</Button>
    </div>
  );
}

export default App;
