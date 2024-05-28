import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RouterIndex from './routes/RouterIndex'

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterIndex/>
      </BrowserRouter>
    </>
  )
}

export default App
