import "./SocialMedia.css"
import {FaGithub} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
//import {FaBehance} from "react-icons/fa"

function SocialMedia(){
    return(
        <div className="SocialContainer">
            <a href="https://github.com/PosadaD" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/diego-posada-i-850941232/" target={"_blank"} rel="noreferrer"><FaLinkedinIn /></a>
            {/* <a href="./"><FaBehance /></a> */}
            <a href="mailto: dapiposada@gmail.com"><FaEnvelope /></a>
        </div>
    )
}

export default SocialMedia;