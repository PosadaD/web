import "./Contents.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../../Components/cvResume/cvResume"
import Blog from "../../Components/Blog/Blog"


function Contents(){
    return(
        <Router>
            <section className="ContentSection">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/blog" element={<Blog />}/>
                    <Route exact path="/blog" element={<Blog />}/>
                </Routes>
            </section>
        </Router>
    )
}

export default Contents;