import ExDocument from "../../documentDOM/document"
import Dataex from "../../../Data/Exercise/ExercisesData"
import { useParams } from "react-router-dom";


function ExexDetails(){
    
    const ExcomponentDetail = () => {
        const {exexId} = useParams();
        const exercise = Dataex.data.exex.find(exercise => exercise.id === exexId);
        return(
                <>
                    <ExDocument 
                        data = {Dataex.data.exex}
                        imgData = "ExImg"
                        image = {`${exercise.img}.jpg`}
                        mainTitle = {exercise.title}
                        mainContent = {exercise.description}
                        keys = {exercise.key}
                    />
                </>
            )
    }
    

    return(
        <>
            {ExcomponentDetail()}
        </>
    )
}

export default ExexDetails;