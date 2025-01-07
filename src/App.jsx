import { useState } from 'react'
import './App.css'
import AppRouter from './components/app-router/AppRouter';
import Nav from './components/Nav';
function App() {

  return (
    <div className='w-screen h-screen flex'>
      <Nav/>
      <AppRouter/>
    </div>
  )
}

export default App
