import "./ImgExpand.css"
import {AiOutlineCloseCircle} from "react-icons/ai"
import infoImg from "../../../Images/infoImg.jpg"

function ImgExpand(props){
    return (props.trigger) ? 
    (
        <section className="expandImgContainer">
            <div className="popContainer">
                <div className="head">
                    <AiOutlineCloseCircle onClick={() => props.setTrigger(false)}/>
                </div>
                <div className="img">
                    <img src={infoImg} alt=""></img>
                </div>
            </div>
        </section>
    ) : "";
}

export default ImgExpand;