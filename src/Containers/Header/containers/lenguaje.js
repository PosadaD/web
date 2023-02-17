import {useState} from "react"
import "./lenguaje.css"

function Lenguaje(){

    const [lenguaje, setLeguaje] = useState(false)
    
    function buttonLenguaje(){ 
        setLeguaje(prevValue => !prevValue)
    }
  

    return(
        <div className="lenguajeSection">
            <button onClick={buttonLenguaje} style={lenguaje ? {backgroundColor:"var(--buttons-color)", color:"var(--bg-color)"}:{backgroundColor:"var(--bg-color)", color:"var(--text-color)"}}>FR</button>
            <button onClick={buttonLenguaje} style={lenguaje ? {backgroundColor:"var(--bg-color)", color:"var(--text-color)"} : {backgroundColor:"var(--buttons-color)", color:"var(--bg-color)"}}>EN</button>
        </div>
    )
}

export default Lenguaje;
