import "./Blog.css"
import BlogSection from "./containers/BlogSection";
import DataBlog from "../../Data/Blog/BlogData"
import {FaChevronCircleRight} from "react-icons/fa"
import {Link} from "react-router-dom"


function Blog(){

    const blogData = DataBlog.data.Categoria1
    const blogSection = blogData.map(item => {
        return(
            <BlogSection 
                key={item.id} 
                item={item}
            />
        )
    })
    

    return(
        <>
            <div className="TitleContainer">
                <h4>BLOG</h4>
            </div>
            <div className="contentSection">
                <div className="containerPost">
                    {blogSection}
                </div>
                <aside className="asideContainer">
                    <h4>React</h4>
                    {blogData.map(item=>{
                        return(
                                <ul>
                                    <li><FaChevronCircleRight /><Link to={`../${item.section}/${item.id}`}>{item.title}</Link></li>
                                </ul>
                            )})}
                </aside>
            </div>
        </>
    )
}

export default Blog;