import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <p>Error 404!! Not found</p>
            <Link to='/'>Back to Homepage...</Link>
        </div>
    );
}
 
export default NotFound;