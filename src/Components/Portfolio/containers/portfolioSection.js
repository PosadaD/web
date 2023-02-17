import "./portfolioSection.css"


function portfolioSection(props){

    var Description = props.item.description;
    const images = require(`../../../portfolioImg/${props.item.img}.jpg`)
 
    return(
        <div className="containerSectionPort" style={{backgroundImage: `url(${images})`}}>
            <div className="infoPort">
                <h3>{props.item.title}</h3>
                <p>{Description.substring(0, 100)}...</p>
            </div>
        </div>      
    )
}

export default portfolioSection;