import SingleGame from "./SingleGame"
import {useState, useEffect} from "react"
import GameForm from "./GameForm";


function Games(){
    const[games, setGames] = useState([])
    const [isAdding, setIsAdding] = useState(false)
    useEffect(()=>{
        fetch("http://localhost:9292/games")
        .then((res)=> res.json())
        .then((data) =>{
            setGames(data)
            console.log(games)
        })
    },[]);

    // get data from GameForm
    function getGames(newGamesRecived){
        const updateGames =[...games, newGamesRecived] 
        setGames(updateGames)

    }

    //update after delete
    function handleDelete(id){
         const deleteUpdate = games.filter((game) => game.id !== id)
         setGames(deleteUpdate)
    }
    // update after 
    function handleUpdateGame(updatedGame) {
        const updatedGames = games.map((game) => {
          if (game.id === updatedGame.id) {
            return updatedGame;
          } else {
            return game;
          }
        });
        setGames(updatedGames);
      }
    
    

    const allGames = games.map((game) =>{
        return <SingleGame
        id={game.id}
        key={game.id}
        name={game.name}
        description={game.description}
        ondelete={handleDelete}
        onUpdateDes={handleUpdateGame}

        
        />
    })


    return (
        <>
         <button  onClick={() => setIsAdding((isAdding) => !isAdding)} type="button" className=" mt-6 mx-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Review</button>
        {isAdding?(
        <GameForm getGames={getGames}  />
        ): (
          null
        )}
        
        {allGames}
        </>
    
    )

}
export default Games