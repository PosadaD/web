import "./Menu.css"
import {useState} from "react"
import {Link} from "react-router-dom"

function Menu(props){

    const [Title, setTitle] = useState("");


    return(props.trigger) ?
    (
        <div className="menu">
            <ul className="menuList">
                <li onClick={()=>{props.setTrigger(false); setTitle(Title => "GAME")}}><Link to={"/game"}>GAME</Link></li>
                <li onClick={()=>{props.setTrigger(false); setTitle(Title => "BLOG")}}><Link to={"/blog"}>BLOG</Link></li>
                <li onClick={()=>{props.setTrigger(false); setTitle(Title => "EXAMPLES & EXCERCISES")}}><Link to={"exex"}>EXAMPLES & EXCERCISES</Link></li>
                {/* <li onClick={()=>{props.setTrigger(false); setTitle(Title => "PORTFOLIO")}}><Link to={"portfolio"}>PORTFOLIO</Link></li> */}
                <li onClick={()=>{props.setTrigger(false); setTitle(Title => "COMPETITIVE PROGRAMING")}}><Link to={"competitive"}>COMPETITIVE PROGRAMING</Link></li>
            </ul>  
        </div> 
    )
    :
    (
        <div className="title">
            {Title}
        </div>  
    )
}

export default Menu;