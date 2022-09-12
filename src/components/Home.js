import Footer from "./Footer"

function Home(){
  return(
    <>
     <div  className="home">
     <div className="absolute text-5xl  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
     <p >Get The best of Game</p>
     <p >Check out available Games</p>
     <p >Recommend a game </p>
     </div>
     </div>
      <h1  className="text-center mt-20 text-2xl">Products</h1>
     <div className="categories flex flex-row mt-10 mb-10 justify-center ">
     <div className="flex justify-center mx-6">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
         <a href="#!">
          <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/images/controllers.jpeg'} alt="Mice"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Controllers</h5>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More</button>
             </div>
              </div>
              </div>

      <div className="flex justify-center mx-6">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
         <a href="#!">
          <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/images/mice.jpeg'} alt="Controllers"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Mice</h5>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More</button>
             </div>
              </div>
              </div>
               <div className="flex justify-center mx-6">
                 <div className="rounded-lg shadow-lg bg-white max-w-sm">
         <a href="#!">
          <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/images/headset.jpeg'} alt="Headset"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Headset</h5>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More</button>
             </div>
              </div>
              </div>
              <div className="flex justify-center mx-6">
                 <div className="rounded-lg shadow-lg bg-white max-w-sm">
         <a href="#!">
          <img className="rounded-t-lg" src={process.env.PUBLIC_URL + '/images/seat.jpeg'} alt="Headset"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Seats</h5>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More</button>
             </div>
              </div>
              </div>
              
              </div>
              <Footer />
              </>
        
  )

}
export default Home