import "./slider.css"
import {Link, useHref} from "react-router-dom"

function SectionSlider(props){



    const images = require(`../../../${props.imgData}/${props.item.img}.jpg`)
    var Description = props.item.description;
 
    return(
        <div className="containerSectionSl">
            <img alt="" src={images}></img>
            <div className="infoSl">
                <h3>{props.item.title}</h3>
                <p>{Description.substring(0, 150)}...</p>
                <Link to={`../${props.item.section}/${props.item.id}`}><button>Read more</button></Link>
            </div>
        </div>      
    )
}

export default SectionSlider;