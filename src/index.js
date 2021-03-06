import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemons from './routes/pokemons';
import Pokemon from './routes/pokemon';
import Buscar from './routes/buscar';
import Student from './routes/student';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <App /> } >
          <Route path="/pokemons" element = {<Pokemons/>}>
            <Route path=":pokemonID" element = { <Pokemon/> } />
          </Route>
          <Route path="/buscarPokemon" element= { <Buscar /> } >
            <Route path=':pokemonID' element = { <Pokemon/> } />
          </Route>
          <Route path="/190904" element = { <Student/> } ></Route>
          <Route path="*" element = {
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here</p>
            </main>
          }/>
        </Route>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
