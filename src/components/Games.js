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

    const allGames = games.map((game) =>{
        return <SingleGame
        key={game.id}
        name={game.name}
        description={game.description}
        
        />
    })
    


    return (
        <>
        <GameForm />
        {allGames}
       
       
        </>
    
    )

}
export default Games