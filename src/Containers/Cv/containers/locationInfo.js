import "./locationInfo.css"

function LocationInfo(props){
    return(
        <div className="locationContainer">
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </div>
    )
}

export default LocationInfo;