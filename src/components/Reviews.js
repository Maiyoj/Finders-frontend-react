import SingleReview from "./SingleReview"
import {useState, useEffect} from "react"



function Reviews(){
    const[reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/reviews")
        .then((res)=> res.json())
        .then((data) =>{
            setReviews(data)
            console.log(reviews)
        })
    },[]);

    const allReviews = reviews.map((review) =>{
        return <SingleReview
        id={review.id}
        key={review.id}
        game={review.game.name}
        title={review.title}
        body={review.body}
        user = {review.game.users.map(user=>{
            return user.name
        })}
        
        />
    })


    return (
        <>
        {allReviews}
        </>   
    )

}
export default Reviews