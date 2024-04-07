
import React, { useEffect, useState } from 'react'
import {getDatabase , ref , set , get , child ,onValue} from "firebase/database";
import { app } from '../firebase';

const db = getDatabase(app);
const App = () => {
  const [name, setName] = useState("")
const putData = ()=> {

  
 
  set(ref(db , "users/piyush") , {
    id: 1 ,
    name: "piyush garg" , 
    age: 23,
  })
}

 const getData = ()=>{
  get(child(ref(db) , "users/piyush")).then((snapshot)=>{
    console.log(snapshot.val());
  })
 }

 useEffect(()=>{
  onValue(ref(db , "users/piyush"),(snapshot)=>{
    setName(snapshot.val().name)
  })
 },[])

  return (
    <div>
      <h1>Firebase React app  {name}</h1>

      <button onClick={putData}>Put data</button>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App