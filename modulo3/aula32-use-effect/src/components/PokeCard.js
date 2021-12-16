import React, { useEffect, useState } from "react";
import axios from "axios";


export default function PokeCard(props){
    const [pokemonInfo, setPokemonInfo] = useState({})

    useEffect(()=>{
        pegaPokemon(props.pokemon)
     },[pokemonInfo])

     const pegaPokemon=(pokeName)=>{
         axios
         .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
         .then((res)=>{
             setPokemonInfo(res.data)
             console.log(res.data)
         })
         .catch((err)=>{
             console.log(err)
         })
     }

     const pokemon=pokemonInfo
     console.log(pokemon)
     return(
         <div>
              <p>{pokemon.name}</p>
              <p>{pokemon.weight} Kg</p>
              {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
              {pokemon.sprites && (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}



         </div>
     )

}

