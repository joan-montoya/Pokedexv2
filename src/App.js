import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Link, Outlet } from "react-router-dom"; 

function App() {

  return(
    <div className='navs'>
      <h1>Pokedex</h1>
      <nav style={{ paddingBottom: "1rem" }}>
        <Link to="/pokemons">Pokemons</Link>
      </nav>
      <Outlet />
    </div>
  )
}
    
    export default App;

