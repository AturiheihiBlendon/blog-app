import React, { useState } from "react"
import { useHistory } from "react-router-dom"

const CreateBlog = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Rodderick')

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog ={ title, body, author };
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('Added new blog');
      history.push('/')
    })
  }
    return (
        <div className="create">
            <h2>Create new Blog</h2>
            <form onSubmit={ handleSubmit }>
        <label>Blog title:</label>
        <input
          value={ title }
          onChange = {(e) =>{
            return setTitle(e.target.value)
          }}
          type="text" 
          required 
        />
        <label>Blog body:</label>
        <textarea
          value={ body }
          onChange = {(e) =>{
            return setBody(e.target.value)
          }}
          required
        ></textarea>
        <label>Blog author:</label>
        <select
          value={ author }
          onChange = {(e) =>{
          return setAuthor(e.target.value)
        }}>
          
          <option value="Rodderick">Rodderick</option>
          <option value="Alicious">Alicious</option>
        </select>
        <button>Add Blog</button>
      </form>
        </div>
    )
}
export default CreateBlog