import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {

    if(calculator.childElementCount < 1) {
      let elt = document.getElementById('calculator');
      let calculator = Desmos.GraphingCalculator(elt);
    }

  }, []);

  return (
    <>
      <h1>yo whats up I finally have a react app going</h1>
      <div id="calculator" style={{ width: "1000px", height: "400px" }}></div>
    </>
  );
}

export default App
