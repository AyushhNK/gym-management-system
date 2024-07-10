import { useState } from 'react'
import Login from './components/authorization/login'
import Register from './components/authorization/register'
import Navbar from './components/NavFoo/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Login/>  */}
      <Register/> 
    </>
  )
}

export default App
