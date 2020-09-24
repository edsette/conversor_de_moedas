import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './componets/Conversor'

function App() {
  return (
    <div className="App">
      <div className='conversor'>
        
        <Conversor moedaA='USD' moedaB='BRL'></Conversor>
      
      </div>
      <div className='conversor'>

        <Conversor moedaA='EUR' moedaB='BRL'></Conversor>
      
      </div>

      <div className='conversor'>

        <Conversor moedaA='BRL' moedaB='USD'></Conversor>

      </div>

      <div className='conversor'>

        <Conversor moedaA='BRL' moedaB='EUR'></Conversor>

      </div>
    </div>
  );
}

export default App;
