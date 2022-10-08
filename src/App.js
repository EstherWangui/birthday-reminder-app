import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import data from './data'; 
import "./App.css"
import List from './List';
//import data from './data';
//import List from './List';
import Name from './Name';
import Nameform from './Nameform';

function App() {
  const [person, setPerson] = useState(data)
  const [people, setPeople] = useState([]);
  const[myname, setmyname] = useState([])
  const[nameNo, setnameNo] = useState(0)
  //const[nameAdded, setnameAdded] = useState(true)

  useEffect(()=>{
    fetch("http://localhost:3000/people")
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data)
      setPeople(data)
      setmyname((myname)=>data)
      setnameNo((nameNo)=>data.length)
    })


  },[])
  console.log(nameNo)

    
  //function handleNewName(){
    //console.log("Parent function is triggered")
    //setnameAdded((NameAdded)=>!NameAdded)
 
  return (
  <div className='form'>
        <Routes>
     <Route path="/form" element={<Nameform/>}/>
     {/*  <Route path="/list" element={<List
      person={data}
      />}/> */}
     </Routes>
     <div className='container'>
     <h3>{person.length} birthdays today</h3>
        <List person={person} />
        <button onClick={() => setPerson([])}>clear all</button>
      </div>
      <div className='set'>
          <Nameform setPeople={setPeople}/>
      {people.map((elem, ind)=>{
      return(
        <Name key={ind} name={elem.name} years={elem.years} Dateofbirth={elem.Dateofbirth} />
      )
    })}
      </div>
  
     
    </div>
  );
}

export default App;