import "./Loading.css"
import FadeLoader from "react-spinners/FadeLoader";


function Loading(){
    return(
        <div className="loadingContainer">
            <FadeLoader 
            color="#22aeea"
            size={110} />
            <h4>Loading...</h4>
        </div>
    )
}


export default Loading;