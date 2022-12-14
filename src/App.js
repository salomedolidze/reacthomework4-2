import './App.css';
import { Component } from "react";
import { render } from '@testing-library/react';

// დავალება 2



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],};
  }
onAddUser=()=>{
const newUser={
  name:"salome",
  age: Math.floor(Math.random() * (60 - 10+1) + 10),
  id: new Date().toString()
};
this.setState((prevState)=>({
 users:[...prevState.users,newUser]
}))
}

onDeleteUser =(id)=>{
this.setState((prevState)=>({
users:prevState.users.filter((user)=>user.id !==id)
}))
console.log("del")
}

onUpdateUser =(id)=>{
  this.setState((prevState)=>{
    const newUserList= prevState.users.reduce((acc,current)=>{
      if(current.id===id){
        current.age=Math.floor(Math.random() * 40)
        current.name="nika"
        console.log(current)

      }
        return [...acc,current]
      
    },[])
    return{
      users:newUserList
    }
  })
}

render(){
  return (
    <div>
      <button onClick={this.onAddUser}>add user</button>
      {this.state.users.map((user)=>{
        return(
          <div key={user.id} style={{display:"flex",justifyContent:"space-between"}}>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <button onClick={()=>this.onUpdateUser(user.id)}>update</button>
            <button onClick={()=>this.onDeleteUser(user.id)}>delete</button>

            </div>
        )
      })}
    </div>
  )
}
}


  
