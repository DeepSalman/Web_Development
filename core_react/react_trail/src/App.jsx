import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function handleClick(){
    alert('Im clicked')
  }


  const handleClick3 = () =>{
    alert("No click is on click")
  }

  return (
    <>
      <h3>Vite + react </h3>

      <button onClick={()=>handleClick()}>Click Me</button>
      <button onClick={()=>handleClick()}>Click Me2</button>

      
    </>
  )
}

export default App
