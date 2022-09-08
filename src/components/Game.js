import SingleReview from "./SingleReview"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import EditGame from "./EditGame";



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
                       </div>
                    )
                })}

        </>   
    )

}
export default Game	