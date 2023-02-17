import "./Cv.css"
import Info from "./components/Info";
import Skills from "./components/Skills";
import SocialMedia from "./components/SocialMedia";

function Cv(){
    return(
        <div className="CvContainer">
           <Info />
           <Skills />
           <SocialMedia /> 
        </div>
    )
}


export default Cv;