import {useEffect, useState} from "react"

function Profile(){
    const [profiles, setProfile] = useState([]) 
    useEffect(()=>{
        fetch("http://localhost:9292/profiles")
        .then((res)=> res.json())
        .then((data) =>{
            setProfile(data)
            console.log(profiles)
        })
    },[]);

return(
    <>
    <div className="flex justify-center h-600 w-800 mt-12">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
            <div className="p-6 flex flex-col justify-start">
                 <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                 <p className="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
         </p>
         <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
         </div>
         </div>
         </div>
    </>
)

}
export default Profile
