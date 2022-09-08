import SingleReview from "./SingleReview"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import EditGame from "./EditGame";
import { Link } from "react-router-dom";



function Game(){
    let params = useParams();
    const[gameDetails, setGameDetails] = useState()

    useEffect(()=>{
        fetch(`http://localhost:9292/games/${params.gameID}`)
        .then((res)=> res.json())
        .then((data) =>{
            setGameDetails(data)
        
        })
    },[params?.gameID]);

    return (
        <>
         <h1 className="text-5xl font-bold mt-0 mb-6 text-center bg-gray-50 text-gray-800 py-20 px-6">{gameDetails?.name}</h1>
         {gameDetails?.reviews.map(review => { return(
             <div key={review.id} className="flex justify-center mt-6 mx-14">
                <div className="block p-6  shadow-lg bg-gray-200 w-50 h-40">
                     <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"></h5>
                      <p  className="text-gray-700 text-base mb-4">{review.body}</p>
                      </div>
                       </div>   )})}
                       <Link to={`/games`} className=" inline-block px-6 py-2.5 bg-blue-600 mt-10 ml-20 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out place-content-end ">Go Back</Link>

        </>   
    )

}
export default Game	