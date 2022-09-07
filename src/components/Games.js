import SingleGame from "./SingleGame"
import {useState, useEffect} from "react"
import GameForm from "./GameForm";


function Games(){
    const[games, setGames] = useState([])
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
    

    const allGames = games.map((game) =>{
        return <SingleGame
        id={game.id}
        key={game.id}
        name={game.name}
        description={game.description}
        ondelete={handleDelete}
        
        />
    })


    return (
        <>
        <GameForm getGames={getGames}  />
        {allGames}
        </>
    
    )

}
export default Games