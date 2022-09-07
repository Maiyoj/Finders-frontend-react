import SingleGame from "./SingleGame"
import {useState, useEffect} from "react"

function Games(){
    const[games, setGames] = useState([])
    useEffect(()=>{
        fetch("https://phase2blogs-api.herokuapp.com/blogs")
        .then((res)=> res.json())
        .then((data) =>{
            setGames(data)
            console.log(games)
        })
    },[]);


    return (
        <>
        <SingleGame />

        </>
    
    )

}
export default Games