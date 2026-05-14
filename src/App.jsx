import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Profile from './Profile.jsx'
import List from './Scientists.jsx'
import RecipeList from './RecipeList.jsx'
import Poem from './Poem.jsx'

function App() {
  return (
    <>
      <Profile />
      <List />
      <RecipeList />
      <Poem />
    </>
  )
}

export default App
