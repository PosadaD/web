import "./Header.css" 
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import {useState} from "react"
import Lenguaje from "./containers/lenguaje"
import Menu from "./containers/Menu"   


function Header(props){

    const [openMenu, setOpenMenu] = useState(false);

    function MenuSection(){
        setOpenMenu(PrevMenu => !PrevMenu)
    }


    return(
        <>
            <header className="headerContainer" style={openMenu ? {width:"260px"}:{width:"75px"}}>
                <div className="navBar">
                    <div onClick={MenuSection}>
                        {openMenu ? <AiOutlineClose/> : <AiOutlineMenu/>}
                    </div>
                </div>
                <div className="nameBar">
                    <Menu trigger={openMenu} setTrigger={setOpenMenu} />
                </div>
                <div className="lenguajeChange">
                    <Lenguaje />
                </div>
            </header> 
            <div className="OpacityMenu" style={openMenu ? {display:"flex"}:{display:"none"}}></div>
        </>
    )
}


export default Header;