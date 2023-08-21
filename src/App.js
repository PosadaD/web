import "./App.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Containers/Header/Header"
import Footer from "./Containers/Footer/Footer"
import Game from "./Components/cvResume/cvResume"
import Blog from "./Components/Blog/Blog"
import ExEx from "./Components/Examples&Exercises/Examples&Ex"
import Portfolio from "./Components/Portfolio/Portfolio"
import Competitive from "./Components/CompetitiveProg/Competitive"
import BlogDetail from "./Components/Blog/components/blogDetail";
import ExexDetail from "./Components/Examples&Exercises/component/ExDetails"
import CompDetail from "./Components/CompetitiveProg/component/CompDetails"
import Home from "./homePage/home";
import ITA from "./Components/projects/ITA";
import Py from "./Components/projects/Py"



function App(){
  return(
    <Router>
        <div className="ComponentsSection">
          <div className="contentSection">
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/web" element={<Home />}/>
              <Route exact path="/game" element={<Game />}/>
              <Route exact path="/blog" element={<Blog />}/>
                <Route path="blog/:blogId" element={<BlogDetail />}/> 
              <Route exact path="/exex" element={<ExEx />}/>
                <Route path="exex/:exexId" element={<ExexDetail />}/> 
              <Route exact path="/portfolio" element={<Portfolio />}/>
              <Route exact path="/competitive" element={<Competitive />}/>
                <Route path="competitive/:compId" element={<CompDetail />}/>
              <Route exact path="/ITA" element={<ITA />}/>
              <Route exact path="/py" element={<Py />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      <Header />
    </ Router>
  )
}

export default App;