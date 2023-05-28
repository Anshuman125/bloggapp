import { useState } from 'react';
import './index.css'
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending]=useState(false);
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog={title, body, author}
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New Blog Added');
            setIsPending(false);
            history.push('/');
        })

    }
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label className='fields'>Blog Body:</label>
                <textarea rows={25} placeholder="required" 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}>
                </textarea>
                <label className='fields'>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="anonymous">anonymous</option>
                </select>
                {!isPending && <button className='fields'>Add blog</button>}
                {isPending && <button className='fields'>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;