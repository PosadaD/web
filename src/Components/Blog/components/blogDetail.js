import BlogDocument from "../../documentDOM/document"
import Datablog from "../../../Data/Blog/BlogData"
import { useParams } from "react-router-dom"


function BlogDetail(){

    const DataBlogDetail = () => {
        const {blogId} = useParams();
        const blog = Datablog.data.Categoria1.find((blog) => blog.id === blogId);
        return(
                <>
                     <BlogDocument 
                        data = {Datablog.data.Categoria1}
                        imgData = "BlogImg"
                        image = {`${blog.img}.jpg`}
                        mainTitle = {blog.title}
                        mainContent = {blog.description}
                        keys = {blog.key}
                    />
                </> 
            )
    }
    

    return(
        <>
            {DataBlogDetail()}
        </>
    )
}

export default BlogDetail;