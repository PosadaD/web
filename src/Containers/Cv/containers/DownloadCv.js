import "./DownloadCv.css"
import {FaDownload} from "react-icons/fa"

function DownloadCv(){
    return(
        <div className="DownloadSection">
            <a href="./" download>DOWNLOAD CV <FaDownload /></a>
            
        </div>
    )
}

export default DownloadCv;