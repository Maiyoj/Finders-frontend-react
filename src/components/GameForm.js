import  {useEffect, useState} from "react"

function GameForm({getGames}){
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  })

  //  handlechanged data
  function onDataChange(e){
    setFormData({
      ...formData, [e.target.name]:e.target.value

  })}

  // function to handle submit
  function handleSubmit(e){
    e.preventDefault();
    const createdGames ={
      name:formData.name,
      description:formData.description
    };

    fetch("http://localhost:9292/games",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(createdGames),
    })
    .then(res => res.json())
    .then(newG =>{
        getGames(newG);
        setFormData({
          ...formData,
          name:"",
          description:""
        })
    })

  }
    return(
        <>
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-10 mt-8">
  <form>
    <h1>Add Game</h1>
    <div className="form-group mb-6">
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Name"
        name="name"
        value={formData.name} 
        onChange = {onDataChange}
        />
    </div>

    <div className="form-group mb-6">
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Comment"
      name = "description"
      value={formData.description}
      onChange = {onDataChange}
    ></textarea>
    </div>
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" onClick={handleSubmit}>Submit</button>
  </form>
</div>
</>
)

}


export default GameForm