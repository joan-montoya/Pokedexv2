import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom"; 

export default function Pokemons(){

    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState('true');
    const [info, setInf] = useState('true');
    const [nombre, setNombre] = useState("");
    const [imagen, setImage] = useState("");
    const [imagenT, setImageT] = useState("");
    const [color, setColor] = useState("");
    const [pokearr, setPokA] = useState([]);
    const [inicio, setIn] = useState(0);
    const [pagina, setPag] = useState(1);
    const [Final, setFin] = useState(9);
    const [posicion, setPo] = useState(0);


    const arr = [];

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=200')
            .then((response) => response.json())
            .then((data) => setResult(
                data.results.map((item) => {
                    fetch(item.url)
                        .then((response) => response.json())
                        .then((allpokemon) => arr.push(allpokemon));
                    setPoke(arr);
                }),
            ));
    }, []);

    setTimeout(() => {
        setLoad(false);
        document.body.style.backgroundColor = '#a5e7fa';
    }, 1000);

     function llamar(){
      if(Final >= 199){
        setFin(9);
        setIn(0);
      }
      if(inicio < 0){
        setFin(9);
        setIn(0);
      }
      if(poke.length >= 90){
        if(pokearr.length <= 9){
          for(var i = inicio; i <= Final; i++){
            pokearr.push(poke[i]);
          }
        }else{
          setPokA([])
          
        }
      }
    }

    

    function barral(val){
      setImage(pokearr[val].sprites.other.dream_world.front_default);
      setImageT(pokearr[val].sprites.back_default);
      setNombre(pokearr[val].name.toUpperCase());
      setColor(pokearr[val].types[0].type.name);
      setPo(val);
    }
      return (
        <main>
           <div className='pokegallery'>
           <h1>POKEDEX POKE API Pagina: {pagina}</h1>
           
            {llamar()}
            { load ? (
              <p>Loading...</p>
            ) :  (

              
    
              pokearr.map((img, i) => (
                <div className='containertotal'>
                    <Link to={"/pokemons/" + pokearr[i].id}>
                <div className='card' id={pokearr[i].types[0].type.name} key={img.id} name={pokearr[i].types[0].type.name} onClick={() => {setInf(false);barral(i)}}>
                    <p className='ids'>Id: {pokearr[i].id} </p>
                    <p className='ids1'>Type: {pokearr[i].types[0].type.name.toUpperCase()}</p>
                  <br></br>
                  <h3><b>{pokearr[i].name.toUpperCase()}</b></h3>
                  <img className='imagen' src={pokearr[i].sprites.other.dream_world.front_default}/>
                </div>
                </Link>
                </div>
                
                
              ))
            )}
            <Outlet/>
            
            
          </div>
            <div className='botona' onClick={() => {setIn(inicio - 9); setFin(Final - 9); setPag(pagina - 1)} }><h3 className='order'>Atras</h3></div>
            
            <div className='botons' onClick={() => {setIn(inicio + 10); setFin(Final + 10); setPag(pagina  + 1)} }><h3 className='order'>Siguiente</h3></div>
          
          </main>

          
          
      );
    }

    