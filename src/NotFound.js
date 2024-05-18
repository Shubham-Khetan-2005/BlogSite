import { Link } from "react-router-dom/cjs/react-router-dom.min"
function NotFound(){
    return(
        <div className="notFound">
            <h2>Sorry...</h2>
            <p>This Page is not Found</p>
            <center><Link to="/">Go to the Home Page...</Link></center>
        </div>
    )
}

export default NotFound;