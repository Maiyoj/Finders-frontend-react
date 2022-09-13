import EditGame from "./EditGame";
import {useState} from "react";
import { Link } from "react-router-dom";

function SingleGame({name, description, ondelete, id, onUpdateDes}){
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteClick() {
    fetch(`https://call-of-duty-apis.herokuapp.com/games/${id}`, {
      method: "DELETE",
    });

    ondelete(id);
  }
    
    return(
    <div className="flex justify-center">
        <div className="block p-6 shadow-lg bg-gray-200 w-96 h-full  h-50 resize- mx-20 my-10  ">
             <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{name}</h5>
             {isEditing ? (
             <EditGame 
             id={id}
             description={description}
             onUpdateDes={onUpdateDes}
             />):(
             <p className="text-gray-700 text-base mb-4 " >{description}</p>)}
              <button type="button" className=" inline-block px-6 py-2.5 bg-[#1f2937] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3" onClick={handleDeleteClick}>Delete</button>
              <Link to={`/games/${id}`} className=" inline-block px-6 py-2.5 bg-[#1f2937] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reviews</Link>
              
          </div>
          </div>
    )
}
export default SingleGame