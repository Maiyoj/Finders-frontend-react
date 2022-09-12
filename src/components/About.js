import ReactPlayer from "react-player"
import Footer from "./Footer"

function About(){
    return(
        <>
        <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-black mt-4 text-center">About Us</h1>
        <div className= "flex flex-row ">
        <div className=" mt-10 w-80 ml-36 mr-10">
        <ReactPlayer
          url="https://youtu.be/r72GP1PIZa0" 
      />
      </div>
        <p className="mt-20  w-62 ml-80 mr-4  ">Games Finder is a video game recommendation website 
        with a vision to create the number one destination for similar games on the web.
        creating the most relevant recommendation lists on the web. T
        this allows Games Finder to bridge the gap between the ever-growing number of video games and gamers by curating high quality lists and adding value by collating information, editorial reviews, filtering options and user ratings. </p>
        </div>
        <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-black mt-4 text-center" >Latest Collection</h2>
        <div className="flex justify-center">
         <img src="https://m.media-amazon.com/images/M/MV5BMTc3NWY2ZTMtNTNlZC00MWM2LWI5MzYtMmU1YzY0ODk5ZjQ1XkEyXkFqcGdeQXVyODA2MTkwODk@._V1_FMjpg_UX1000_.jpg" className=" h-98 w-96 mx-6  mb-6 " alt="Game review" />
         <img src="https://m.media-amazon.com/images/M/MV5BMTc3NWY2ZTMtNTNlZC00MWM2LWI5MzYtMmU1YzY0ODk5ZjQ1XkEyXkFqcGdeQXVyODA2MTkwODk@._V1_FMjpg_UX1000_.jpg" className=" h-h-98 w-96 mb-6 mx-6" alt="Game review" />
         <img src="https://cdn.mos.cms.futurecdn.net/iSybeeHJC96izazJfb6PpA-1200-80.jpg" className=" h-98 w-96 mb-6 mx-6 " alt="Game review" />
    </div>
    <Footer/>
     </>

    )

}
export default About
