import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//abcdef
function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
  if(counter>0 && counter<20){
    setCounter(counter+1)
  }
    
    
  }
const removeValue = () => {
  if(counter>0 && counter<20){
    setCounter(counter-1)
  }
  
}
  return (
    <>
    <h1>CHANGE COUNTER</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
