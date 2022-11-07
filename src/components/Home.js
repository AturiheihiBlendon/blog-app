import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [Blogs, setBlogs] = useState([]);
const handleDelete = (id) => {
    const newBlogs = Blogs.filter((blog) => {
        return  blog.id !== id;
    });
    setBlogs(newBlogs);
}

useEffect(() => {
    fetch('http://localhost:5000/blogs').then((res) => {
        return res.json()
    }).then((data)=>{
        setBlogs(data)
    })
}, []);

    return(
        <div className="home">
            <BlogList blogs={Blogs} title="All Blogs" handleDelete={handleDelete} />
            {/* <BlogList blogs={Blogs.filter((blog) => {
                return blog.author === 'Alicious'
            })} title="My Blogs" handleDelete={handleDelete} /> */}
        </div>
    );
}
export default Home;