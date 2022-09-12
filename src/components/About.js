import ReactPlayer from "react-player"
import Footer from "./Footer"

function About(){
    return(
        <>
        {/* <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-black mt-4 text-center">About Us</h1>
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
    </div> */}
    <div className=" flex justify-center mt-10 mb-10">
    <div className=" mx-12">
        <ReactPlayer
          url="https://youtu.be/r72GP1PIZa0" 
      />
      </div>
      <div>
        <p className="mx-12">Games Finder is a video game recommendation website 
        with a vision to create the number one destination for similar games on the web.
        creating the most relevant recommendation lists on the web. T
        this allows Games Finder to bridge the gap between the ever-growing number of video games and gamers by curating high quality lists and adding value by collating information, editorial reviews, filtering options and user ratings. </p>
        </div>
    </div>
    <h1  className="text-center mt-20 text-2xl">Latest Collection</h1>
    <div className="categories flex flex-row mt-10 mb-10 justify-center ">
     <div className="flex justify-center mx-6">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
         <a href="#!">
          <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/images/gt1.jpeg'} alt="Mice"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">GTA5</h5>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Purchase</button>
             </div>
              </div>
              </div>

      <div className="flex justify-center mx-6">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
         <a href="#!">
          <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/images/co1.jpeg'} alt="Controllers"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Call of Duty</h5>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Purchase</button>
             </div>
              </div>
              </div>
               <div className="flex justify-center mx-6">
                 <div className="rounded-lg shadow-lg bg-white max-w-sm">
         <a href="#!">
          <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/images/helo4.jpeg'} alt="Headset"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Helo3</h5>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Purchase</button>
             </div>
              </div>
              </div>
              <div className="flex justify-center mx-6">
                 <div className="rounded-lg shadow-lg bg-white max-w-sm">
         <a href="#!">
          <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/images/helo.jpeg'} alt="Headset"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">GTA4</h5>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Purchase</button>
             </div>
              </div>
              </div>
              
              </div>
    <Footer/>
     </>

    )

}
export default About
