import {useEffect, useState} from "react"
import Footer from "./Footer";

function Profile(){
    const [profiles, setProfile] = useState([]) 
    useEffect(()=>{
        fetch("https://call-of-duty-apis.herokuapp.com/profiles")
        .then((res)=> res.json())
        .then((data) =>{
            setProfile(data)
        })
    },[]);

return(
    <>
    <div className="flex justify-center h-600 w-800 mt-12 mb-40">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-300 shadow-lg">
            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
            <div className="p-6 flex flex-col justify-start">
            <h5 className="text-black text-xl font-medium mb-2">Profile</h5>
                 <p className="text-black text-base mb-4">Twitch:   {profiles.twich} </p>
                 <p className="text-black text-base mb-4">Twitter:   {profiles.twitter} </p>
                 <p className="text-black text-base mb-4">Bio:   {profiles.bio} </p>

         </div>
         </div>
         </div>
         <Footer />
    </>
)

}
export default Profile
