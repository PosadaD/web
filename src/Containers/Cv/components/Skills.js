import "./Skills.css"
import CprogressBar from "../containers/CprogressBar";
import LprogressBar from "../containers/LprogressBar";
import LocationInfo from "../containers/locationInfo";
import ExtraKnowedge from "../containers/ExtraKnowledge";
import DownloadCv from "../containers/DownloadCv";

function Skills(){
    return(
        <section className="skillsContainer">
            <div className="SectionContainer">
                <LocationInfo title="Residence" text="Mexico" />
                <LocationInfo title="City" text="AGS" />
                <LocationInfo title="Age" text="22" />
            </div>
            <hr className="break"></hr>
            <div className="lenguajesBar">
                <CprogressBar porcentaje="60" title="English"/>
                <CprogressBar porcentaje="10" title="French"/>
                <CprogressBar porcentaje="100" title="Spanish"/>
            </div>
            <hr className="break"></hr>
            <div className="SectionContainer Lbar">
                <LprogressBar titleLbar="CSS" porcentajeLbar="70" />
                <LprogressBar titleLbar="HTML" porcentajeLbar="90" />
                <LprogressBar titleLbar="JAVA" porcentajeLbar="20" />
                <LprogressBar titleLbar="JAVASCRIPT" porcentajeLbar="70"/>
            </div>
            <hr className="break"></hr>
            <div className="SectionContainer">
                <ExtraKnowedge text="Bootstrap" />
                <ExtraKnowedge text="React" />
                <ExtraKnowedge text="Wordpress" />
                <ExtraKnowedge text="GIT knowledge" />
            </div>
            <hr className="break"></hr>
            <div className="SectionContainer">
                <DownloadCv />
            </div>
        </section>
    )
}

export default Skills;