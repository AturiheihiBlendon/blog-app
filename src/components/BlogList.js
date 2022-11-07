import { Link } from "react-router-dom";

const BlogList = (props) => {
    const Blogs = props.blogs;
    const Title = props.title
    const Delete = props.handleDelete
    return (
        <div className="blog-list">
            <h2> { Title } </h2>
            {Blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                    {/* <button onClick={ () => {
                        return Delete(blog.id)} 
                        }>Delete</button> */}
                </div>
            ))}
        </div>
    );
}
export default BlogList