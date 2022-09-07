import  {useEffect, useState} from "react"

function GameForm(){
  const [formData, setFormData] = useState({
    name: "",
    body: ""
  })

  //  handlechanged data
  function onDataChange(e){
    setFormData({
      ...formData, [e.target.name]:e.target.value

  })}

  // function to handle submit
  function handleSubmit(){
    
  }
    return(
        <>
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form>
    <div class="form-group mb-6">
      <input type="text" class="form-control block
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

    <div class="form-group mb-6">
      <textarea
      class="
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
      name = "body"
      value={formData.body}
      onChange = {onDataChange}
    ></textarea>
    </div>
    <button type="submit" class="
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
      ease-in-out">Send</button>
  </form>
</div>
</>
)

}


export default GameForm