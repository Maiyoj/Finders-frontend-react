import {Link} from  "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="flex justify-around p-8 bg-blue-900 h-24 text-white " >
            <h1>Games Finder</h1>
            <div className="px-6">
            <Link to={"/"} exact="true">Home</Link>
            <Link to={"/about"} exact="true">About</Link>
            <Link to={"/games"} exact="true">Games</Link>
            <Link to={"/reviews"} exact="true">Reviews</Link>
            </div>
        </nav>
        </>
    )
    
}
export default Navbar
