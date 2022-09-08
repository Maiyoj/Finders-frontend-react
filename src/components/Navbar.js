import {Link} from  "react-router-dom";
import {  FaUserAlt } from 'react-icons/fa';

function Navbar(){
    return(
        <>
        <nav className="flex justify-evenly p-8 bg-blue-900 h-24 text-white " >
            <h1>Games Finder</h1>
            <div className="">
            <Link to={"/"} exact="true">Home</Link>
            <Link to={"/about"} exact="true">About</Link>
            <Link to={"/games"} exact="true">Games</Link>
            <Link to={"/reviews"} exact="true">Reviews</Link>
            <Link to={"/profile"} exact="true">< FaUserAlt /></Link>
            </div>
        </nav>
        </>
    )
    
}
export default Navbar
