
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    // const handleDelete=(id)=>{
    //     const newBlogs = blogs.filter(blog => blog.id!==id);
    //     setBlogs(newBlogs);
    // }

    
    return (
        <div className="home">
            {error && <div className="error">{error}</div>}
            <h2 className="homepage">HomePage</h2>
            <div className="hr"></div>
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/*handleDelete={handleDelete}*//>}
        </div>
    );
}
 
export default Home;