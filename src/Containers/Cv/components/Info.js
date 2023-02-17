import "./Info.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import {FaExpand} from "react-icons/fa"
import ImgExpand from "../containers/ImgExpand";


function Info(){

    const [openImg, setOpenImg] = useState(false);

    function ExpandImg(){
        setOpenImg(prevValue => !prevValue)
    }

    return(
        <>
            <div className="infoContainer">
                <div className="imgContainer">
                    <div className="expandIcon" onClick={ExpandImg}><FaExpand /></div>
                </div>
                <div className="available">
                    <div className="textAvailable"><p>I am available to work as developer</p></div>
                </div>
                <h4><Link to={"/"}>Diego Posada</Link></h4>
                <span>Front-end Developer</span>
            </div>
            <ImgExpand trigger={openImg} setTrigger={setOpenImg}/>
        </>
    )
}

export default Info;