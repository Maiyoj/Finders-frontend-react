import {Link} from  "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="flex justify-around pt-8 bg-indigo-500 h-24">
            <logo>Games Finder</logo>
            <div className="links">
            <Link to={"/"} exact="true">Home</Link>
            <Link to={"/about"} exact="true">About</Link>
            <Link to={"/reviews"} exact="true">Reviews</Link>
            </div>
        </nav>
        </>
    )
    
}
export default Navbar