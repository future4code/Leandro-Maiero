import axios from "axios"
import {useEffect, useState} from "react/cjs/react.development"

function TelaMatch(props) {

    const [matches, setMatches] = useState([])

    const verMatch = () =>{
    
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro-maiero/matches")
           .then((resp)=>{
             setMatches(resp.data.matches)
            })
            .catch((err)=>{
              console.log(err.response)
            })
      }

      useEffect (()=>{ 
          verMatch()
      })

    return (
        <div>
            {
                matches.map((match) =>{
                    return (
                        <>
                            <p>{match.name}</p>
                            <img src = {match.photo}/>;
                            
                        </>
                    )
                })
            }
            {/* <h2>{props.perfil.name}</h2>
            <p>{props.perfil.age}</p> */}
            
        </div>
    )
}

export default TelaMatch