import { useRef, useState } from "react";
//import { Router } from "react-router-dom"

function Nameform({setPeople}) {
    const[newName, setnewName] = useState({})
        function handleInput(e){
           setnewName({...newName, [e.target.name]:e.target.value})
        }
    function handleAddName(e){
      e.preventDefault()
      console.log(newName)
      setPeople((prev)=>[...prev,newName])
      /* fetch("http://localhost:3000/people",{
        // method, headers, body
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({...newName,"number":parseInt(newName.number)})
      }) */

    }
    const nameInput = useRef()
    const yearInput = useRef()
    const dateInput = useRef()
    function handleDelete(){
      nameInput.current.value=""
      yearInput.current.value=""
      dateInput.current.value=""
    }
    

  return (
    <>
      <form onSubmit={handleAddName}>
        <label>Name:
          <input ref={nameInput} onBlur={handleInput} type="text" name="name" required/>
        </label><br/>
        <label>years:
          <input ref={yearInput} onBlur={handleInput} type="text" name="years" required/>
        </label><br/>
        <label>Dateofbirth:
          <input  ref={dateInput} onBlur={handleInput} type="date" name="Dateofbirth" required/>
        </label><br/>
        <button style={{fontSize:"40px"}}>Add</button> 
      </form>
      
      <button onClick={handleDelete} 
      style={{fontSize:"50px"}}

      >X</button>
    </>
  );
}
export default Nameform;
