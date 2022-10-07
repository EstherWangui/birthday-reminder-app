import { useState } from "react"

function Nameform({formSubmitted, namelength}) {
    const[newName, setnewName] = useState({"id":namelength+=1})
    console.log(namelength)
    function handleInput(e){
        let value = e.target.value
        let name = e.target.name
        console.log(`value is ${value}`)
        console.log(`name is ${name}`)
        // let data = {[name]: value}
        setnewName({...newName,[name]: value})


    }
    function handleAddName(e){
      e.preventDefault()
      console.log(newName)
      fetch("http://localhost:3000/people",{
        // method, headers, body
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newName)
      })
      .then((res)=> res.json())
      .then((data)=>
        console.log(data)
      )
      formSubmitted()

    }

    console.log(newName)
  return (
    <>
      <form onSubmit={handleAddName}>
        <label>
         Name:
          <input onBlur={handleInput} type="text" name="name" />
        </label>
        <label>
          years:
          <input onBlur={handleInput} type="text" name="years" />
        </label>
        <label>
          Dateofbirth:
          <input onBlur={handleInput} type="text" name="Dateofbirth" />
        </label>
       <button>submit</button>
      </form>
    </>
  );
}
export default Nameform;
