import CompDocument from "../../documentDOM/document"
import Datacomp from "../../../Data/Competitive/CompetitiveData"
import { useParams } from "react-router-dom";


function CompetitiveDetail(){
    
    const CompcomponentDetail = () => {
        const {compId} = useParams();
        const competitive = Datacomp.data.competitive.find(competitive => competitive.id === compId);
        return(
                <>
                    <CompDocument 
                        data = {Datacomp.data.competitive}
                        imgData = "CompeImg"
                        image = {`${competitive.img}.jpg`}
                        mainTitle = {competitive.title}
                        mainContent = {competitive.description}
                        keys = {competitive.key}
                    />
                </>
            )
    }
    

    return(
        <>
            {CompcomponentDetail()}
        </>
    )
}

export default CompetitiveDetail;