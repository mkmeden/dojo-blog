import { useState } from "react";
import {useNavigate } from 'react-router-dom';

const Create = () => {


    const [title ,setTitle] = useState('');
    const [body ,setBody] = useState('');
    const [author ,setAuthor] = useState('');
    const [ispending , setIspending] = useState(false);
    const navigate = useNavigate ();

    const handleSubmit =(e) =>{ 

        setIspending(true);
        
        e.preventDefault();
        const blog = {title, body , author};
        
        fetch('http://localhost:8000/blogs' , {
            method : 'POST', 
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(blog)
        }).then( ()=>{
            console.log('added');
            setIspending(false);    
            navigate('/')
            
        }
        )

    }


    return ( <div className="create">
        <h1>Create new blogs</h1>       
        
        <form action="" onSubmit={handleSubmit}>
            <label >Blog title:</label>
            <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

            <label >Blog body:</label>
            <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>

            <label >Blog author:</label>
            <input type="text" required value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
            {ispending? <button disabled>Adding blog...</button> :<button>Add Blog</button>}
        </form>
      
    </div> );
}
 
export default Create;