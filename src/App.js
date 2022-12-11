import './App.css';
import { useEffect, useState } from "react";

function App() {
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
 const usersFromBe=[{name:"salome",age:randomInteger(10,60),id:123456},{name:"nika",age:randomInteger(10,60),id:23456},{name:"anano",age:randomInteger(10,60),id:345678}]
   
  

  const [users, setUsers] = useState([]);
 

// console.log(users.name)

const userFromBeMap=()=>{
  usersFromBe.map((elem, index) => {
    console.log("elem", elem.name)
  
  return(<li key={index}>{elem.name}</li>) 
  })
}
 
  return (
    <>
    
     {users.map((elem, index) => {
            console.log("elem",elem)

      return(<li key={index}>{elem}</li>) 
    })}
      
   <button onClick={()=>{setUsers([...users,userFromBeMap()]);alert("added")

}} >add</button>
<button onClick={()=>{setUsers([]);alert("‘deleted’")
}} >delete</button>
  
    </>
  );
}

export default App;
