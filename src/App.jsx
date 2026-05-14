import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Profile from './Profile.jsx'
import List from './Scientists.jsx'

function App() {
  return (
    <>
      <Profile />
      <List />
    </>
  )
}

export default App
