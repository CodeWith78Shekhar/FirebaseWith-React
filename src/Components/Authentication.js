import React from 'react'
import {getAuth , createUserWithEmailAndPassword} from  "firebase/auth"
import { app } from '../firebase'

const auth = getAuth(app)

const Authentication = () => {

const signupUser = ()=> {
    createUserWithEmailAndPassword(auth , "shekharsharma0119@gmail.com" , "shekhar123").then((value)=>console.log(value));
};

  return (
    <div>
      <h1>firebase react App</h1>
    
    </div>
  )
}

export default Authentication
