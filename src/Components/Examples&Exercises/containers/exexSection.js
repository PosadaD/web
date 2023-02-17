import "./exexSection.css"
import {Link} from "react-router-dom"

function ExampleSection(props){


    const images = require(`../../../ExImg/${props.item.img}.jpg`)
    var Description = props.item.description;
 
    return(
        <div className="containerSectionEx">
            <img alt="" src={images}></img>
            <div className="infoExex">
                <h3>{props.item.title}</h3>
                <p>{Description.substring(0, 150)}...</p>
                <Link to={`./${props.item.id}`}><button>Read more</button></Link>
            </div> 
        </div>      
    )
}

export default ExampleSection;