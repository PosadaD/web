import "./loading.css"
import HashLoader from "react-spinners/HashLoader";


function Loading(){
    return(
        <div className="loadingContainer">
            <HashLoader 
            color="#22aeea"
            size={110} />
            <h4>Loading...</h4>
        </div>
    )
}


export default Loading;