import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [Blogs, setBlogs] = useState([]);
// add id to line 10
    useEffect(() => {
        fetch('http://localhost:5000/blogs/' + id).then((res) => {
            return res.json()
        }).then((data)=>{
            setBlogs(data)
        })
    }, ['id']);

    const handleClick = () => {
        fetch('http://localhost:5000/blogs/' + Blogs.id, {
        method: 'DELETE'
    }).then(()=>{
      console.log('Deleted');
      history.push('/')
    })
    }
    
    return (
        <div className="blog-details">
            <h2>Blog Deatils - id ({ id })</h2>
            { Blogs && (
                <article>
                    <h2>{ Blogs.title }</h2>
                    <p>Written by { Blogs.author }</p>
                    <div>{ Blogs.body }</div>
                    <button onClick={ handleClick }>Delete</button>
                </article>
      )}
        </div>
    );
}
export default BlogDetails