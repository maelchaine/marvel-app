import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import characters from './data/characters.json'

function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <ul id="characters">
        {characters.map((character)=>(
          <li key={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

