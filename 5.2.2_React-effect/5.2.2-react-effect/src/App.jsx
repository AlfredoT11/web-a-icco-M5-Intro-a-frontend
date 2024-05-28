import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import RouterIndex from './routes/RouterIndex'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Pokedex</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link to='/'>
              <span className="navbar-text">
                Home
              </span>
            </Link>
            <Link to='/about'>
              <span className="navbar-text">
               About us
              </span>
            </Link>
          </div>
        </nav>
        <RouterIndex />
      </BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-bottom" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-text">
            Desarrollado para la clase de intro a frontend en Dev.f
          </span>
        </div>
      </nav>
    </>
  )
}

export default App
