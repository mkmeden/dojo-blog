import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

const {id} = useParams();
const {data } = useFetch('http://localhost:8000/blogs/' + id);
const navigate = useNavigate();

const handleDelete = (e) =>{

    fetch('http://localhost:8000/blogs/' + id, {
        method : 'DELETE'
    }).then(()=>{
        navigate('/');
    })
}

console.log(data);

    return ( 
        <div className="blog-details">
            <h2>
                {data && 
                
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                </article>
                }
            </h2>

            <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BlogDetails;