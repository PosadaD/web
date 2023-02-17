import "./Portfolio.css"
import PortfolioSection from "./containers/portfolioSection"
import PortData from "../../Data/PortfolioData"


function Portfolio(){
    const portData = PortData.data.blog
    const portSection = portData.map(item => {
        return(
            <PortfolioSection 
                key={item.id} 
                item={item}
            />
        )
    })

    return(
        <>
            <div className="containerPortfolio">
                {portSection}
            </div>
        </>
    )
}

export default Portfolio;