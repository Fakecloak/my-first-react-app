import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Profile from './Profile.jsx'
import List from './Scientists.jsx'
import RecipeList from './RecipeList.jsx'
import Poem from './Poem.jsx'
import Gallery from './Gallery.jsx'
import Form from './Forms.jsx'
import BgChanger from './bg_changing.jsx'
import SyncedInputs from './Synced_inputs.jsx'
import FilterableList from './FilteringList.jsx'

function App() {
  return (
    <>
      {/* <Profile /> */}
      {/* <List /> */}
      {/* <RecipeList /> */}
      {/* <Poem /> */}
      {/* <Gallery /> */}
      {/* <Form /> */}
      {/* <BgChanger /> */}
      {/* <SyncedInputs /> */}
      <FilterableList />
    </>
  )
}

export default App
