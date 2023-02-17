import "./ExtraKnowledge.css"
import {FaCheckCircle} from "react-icons/fa"

function ExtraKnowedge(props){
    return(
        <div className="KnowledgeSection">
            <FaCheckCircle />
            <p>{props.text}</p>
        </div>
    )
}

export default ExtraKnowedge;