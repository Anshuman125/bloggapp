import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blogger'sHub</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Write</Link>
                <Link to="/signup">Create account</Link>
                <Link to="/signin">Sign-In</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;