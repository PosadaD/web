import "./BlogSection.css"
import {Link} from "react-router-dom"

function BlogSection2(props){


    const images = require(`../../../BlogImg/${props.item.img}.jpg`)
    var Description = props.item.description;

    return(
        <div className="containerSection">
            <img alt="" src={images}></img>
            <div className="BlogtextContent">
                <h3>{props.item.title}</h3>
                <p>{Description.substring(0, 150)}...</p>
                <Link to={`./${props.item.id}`}><button>Read more</button></Link>
            </div>
        </div>      
    )
}

export default BlogSection2;