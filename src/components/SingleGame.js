function SingleGame({name, description}){
    return(
    <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-96 h-60">
             <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{name}</h5>
             <p className="text-gray-700 text-base mb-4 " >{description}</p>
                     <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                     <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                     </div>
                     </div>
    )
}
export default SingleGame