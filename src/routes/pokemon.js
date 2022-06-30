import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Pokemon() {

    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState('true');
    const [nombre, setNombre] = useState("");
    const [imagen, setImage] = useState("");
    const [imagenT, setImageT] = useState("");
    const [color, setColor] = useState("");
    const [posicion, setPo] = useState(0);
    let params = useParams();
    


    const arr = [];

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=400')
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
        if(load == false){
          for(var i = 0; i <= poke.length; i++ ){
            if(poke[i].id == params.pokemonID){
              setPo(i);
              setImage(poke[i].sprites.other.dream_world.front_default);
              setImageT(poke[i].sprites.back_default);
              setNombre(poke[i].name.toUpperCase());
              setColor(poke[i].types[0].type.name);
            }
          } 
        }
    }, 2000);

    

    return (
        <div className="barralateral">
            { load ? (
              <p>Loading...</p>
            ) :  (
            <div className={color}>
                <img className='icono' src={imagen}/>
                <img className='imagenb' src={imagen}/>
                  <br></br>
                  <img className='imagenb1' src={imagenT}/>
                  <div className='info'>
                    <div className='informacion'>
                      <h1>{nombre}</h1>
                        <p><b>Xp base: </b>{poke[posicion].base_experience}</p>
                        <p><b>height: </b> {poke[posicion].height}</p>
                        <p><b>weight: </b> {poke[posicion].weight}</p>
                        <p className='habilidades'> Type: {poke[posicion].types[0].type.name}</p>
                        <p><b>Movimientos</b> <br></br>  
                          {poke[posicion].moves[0].move.name}, {poke[posicion].moves[1].move.name} <br></br>
                          {poke[posicion].moves[2].move.name}, {poke[posicion].moves[3].move.name}
                        </p> 
                    </div>
                  </div>
              </div>
            )}
        </div>
    )
}