import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Users from './users'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())



function App() {
  function handleClick(){
    alert('Im clicked')
  }


  const handleClick3 = () =>{
    alert("No click is on click")
  }

  return (
    <>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <h3>Hello</h3>
      
    </>
  )
}

export default App
