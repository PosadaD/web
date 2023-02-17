import "./Footer.css"
import {FaRegCopyright} from "react-icons/fa"

function Footer(){
    return(
        <section className="footerContainer">
            <FaRegCopyright /><span>2022 Diego Posada</span>
        </section>
    )
}

export default Footer;