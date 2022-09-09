import { useState } from "react"

function EditGame({id, description, onUpdateDes}){
    const [newDes, setDes] = useState(description)

    function handleChange(e){
    setDes(e.target.value)
}

// onsubmit update
function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://call-of-duty-apis.herokuapp.com/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: newDes,
      }),
    })
      .then((r) => r.json())
      .then((updatedGm) => onUpdateDes(updatedGm));
  }
    

    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <textarea
            rows={6}
            type="text"
            name="description"
            value={newDes}
            onChange={handleChange}
            ></textarea>
             <input type="submit" value="Save" />
             </form>
             </>
    )

}
export default EditGame