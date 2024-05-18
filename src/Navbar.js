import { Link } from "react-router-dom";

function Navbar(){

    return (
        <nav className="navbar">
            <h1>BlogIt</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blogs</Link>
            </div>
        </nav>
    );
}

export default Navbar;