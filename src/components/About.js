import ReactPlayer from "react-player"
import Footer from "./Footer"

function About(){
    return(
        <>
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
