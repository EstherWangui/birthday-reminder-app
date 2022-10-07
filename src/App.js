import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
import Name from './Name';
import Nameform from './Nameform';
function App() {
  const [people, setPeople] = useState(data);
  const[myname, setmyname] = useState([])
  const[nameNo, setnameNo] = useState(0)
  const[nameAdded, setnameAdded] = useState(true)

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data)
      setmyname((myname)=>data)
      setnameNo((nameNo)=>data.length)
    })
    let namelist = myname.map((elem, ind)=>{
      return(
        <Name key={ind} name={elem.name} years={elem.years} Dateofbirth={elem.Dateofbirth} />
      )
    })

  },[nameAdded])
  console.log(nameNo)

    
  function handleNewName(){
    console.log("Parent function is triggered")
    setnameAdded((NameAdded)=>!NameAdded)
  }
  return (
  <>
  <Nameform formSubmitted={handleNewName} namelength={nameNo}/>
      {namelist}
     <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
    </>
  );
}

export default App;