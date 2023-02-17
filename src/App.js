import "./App.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Containers/Header/Header"
import Cv from "./Containers/Cv/Cv";
import Footer from "./Containers/Footer/Footer"
import Home from "./Components/cvResume/cvResume"
import Blog from "./Components/Blog/Blog"
import ExEx from "./Components/Examples&Exercises/Examples&Ex"
import Portfolio from "./Components/Portfolio/Portfolio"
import Competitive from "./Components/CompetitiveProg/Competitive"
import BlogDetail from "./Components/Blog/components/blogDetail";
import ExexDetail from "./Components/Examples&Exercises/component/ExDetails"
import CompDetail from "./Components/CompetitiveProg/component/CompDetails"


function App(){
  return(
    <Router>
      <Cv />
        <div className="ComponentsSection">

          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/blog" element={<Blog />}/>
            <Route path="blog/:blogId" element={<BlogDetail />}/> 
            <Route exact path="/exex" element={<ExEx />}/>
              <Route path="exex/:exexId" element={<ExexDetail />}/> 
            <Route exact path="/portfolio" element={<Portfolio />}/>
            <Route exact path="/competitive" element={<Competitive />}/>
              <Route path="competitive/:compId" element={<CompDetail />}/>
          </Routes>
          <Footer />
        </div>
      <Header />
    </ Router>
  )
}

export default App;