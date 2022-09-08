import {Link} from  "react-router-dom";
import {  FaUserAlt } from 'react-icons/fa';

function Navbar(){
    return(
        <>
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#1f2937] text-white shadow-lg h-20 navbar navbar-expand-lg navbar-light">
            <h1 className="ml-9 text-xl">Games Finder</h1>
            <div className="ml-500  text-xl">
            <Link  className="nav-item p-2" to={"/"} exact="true">Home</Link>
            <Link  className="nav-item p-2"to={"/about"} exact="true">About</Link>
            <Link  className="nav-item p-2"to={"/games"} exact="true">Games</Link>
            </div>
            <Link className="nav-item p-2 mr-5 height: 25px; width: 25px" to={"/profile"} exact="true">< FaUserAlt /></Link>
        </nav>
        </>
    )
    
}
export default Navbar
