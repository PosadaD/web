import "./CompSection.css"
import {Link} from "react-router-dom"


function CompetitiveSection(props){


    var Description = props.item.description;
 
    return(
        <div className="containerSectioncomp">
            <div className="infoComp">
                <h3>{props.item.title}</h3>
                <p>{Description.substring(0, 150)}...</p>
                <Link to={`./${props.item.id}`}><button>Read more</button></Link>
            </div>
        </div>      
    )
}

export default CompetitiveSection;