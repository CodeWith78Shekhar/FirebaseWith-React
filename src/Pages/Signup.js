import React  ,{useState} from 'react'
import { getAuth , createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app);
const googleProvide = new GoogleAuthProvider();
const Signup = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth , email , password).then((value)=>alert("user created")) .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle error gracefully
            if (errorCode === 'auth/email-already-in-use') {
                alert('Email address is already in use.');
            } else {
                alert(errorMessage);
            }
        });
    }

    const signupWithGoogle = ()=>{
        signInWithPopup(auth ,googleProvide )
    }


  return (
    <div className='signup-page' style={{border:"2px solid" , width:"50%" , margin:"1% 25%"}}>
    <h2>sign up</h2>
      <label >Email</label><br />
      <input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Enter your email' /><br /><br />
      <label >Password</label><br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Enter your password' /><br /><br />
      <button onClick={createUser}>Sign up</button>
      <button onClick={signupWithGoogle}>Sign in with google</button>
    </div>
    
  )
}

export default Signup
