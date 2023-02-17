import "./LprogressBar.css"

function LprogressBar(props){
    return(
        <div className="LbarSection">
            <div className="lbarText">
                <h5>{props.titleLbar}</h5>
                <p>{props.porcentajeLbar}%</p>
            </div>
            <div className="LbarContainer">
                <div className="bar" style={{width:`${props.porcentajeLbar}%`}}></div>
            </div>
        </div>
    )
}

export default LprogressBar;