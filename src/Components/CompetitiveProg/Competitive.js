import "./Competitive.css"
import CompetitiveSection from "./containers/CompSection"
import CompetData from "../../Data/Competitive/CompetitiveData"
import {FaSearch} from "react-icons/fa"

function Competitive(){
    const compData = CompetData.data.competitive
    const compSection = compData.map(item => {
        return(
            <CompetitiveSection 
                key={item.id} 
                item={item}
            />
        )
    })

    return(
        <>
            <div className="seachContainerComp">
                <div className="opacitycomp">
                    <input type="text" placeholder="  Search..."></input>
                    <button><FaSearch /></button>
                </div>
            </div>
            <div className="containerComp">
                {compSection}
            </div>
        </>
    )
}

export default Competitive;