import React, { useState, useEffect } from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import { Link, Outlet } from "react-router-dom"; 

function App() {

  return(
    <div >
      <div className='navs'>
        <h1>Pokedex</h1>
        <nav style={{ paddingBottom: "1rem" }}>
          <Link to="/pokemons"><h1 className='nav'>Pokemons</h1></Link>
          <Link to="/buscarPokemon"><h1 className='nav'>Buscar Pokemon</h1></Link>
          <Link to="/190904"><h1 className='nav'>Student</h1></Link>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}
    export default App;

