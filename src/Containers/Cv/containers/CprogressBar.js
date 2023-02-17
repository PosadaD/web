import "./CprogressBar.css"

function CprogressBar(props){

    var porcentaje = props.porcentaje;
    var deg = porcentaje*3.6;
    var degleft = porcentaje*3.6-180;

    return(
        <div className="circleContainer">
            <div className="circle-out">
                <div className="circle-in">
                    <p>{porcentaje}%</p>
                </div>
                <div className="right" style={porcentaje<=50 ? {transform : `rotate(${deg}deg)`}:{transform : "rotate(0deg)"}}>
                    <div className="rectangle-50" style={porcentaje>50 ? {backgroundColor:"var(--buttons-color)"}:{}}></div>    
                </div>
                <div className="left" style={porcentaje>50 ? {transform : `rotate(${degleft}deg)`}:{}}>
                    <div className="rectangle-100"></div>
                </div>
            </div>
            <p className="titleCPB">{props.title}</p>
        </div>
    )
}

export default CprogressBar;