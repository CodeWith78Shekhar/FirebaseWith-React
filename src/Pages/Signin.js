import React , {useState}from 'react'
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app)
const Signin = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const LoginUser = ()=>{
        signInWithEmailAndPassword(auth , email , password).then((value)=>console.log("successful login")).catch((err)=>console.log("error"))
    }
  return (
    
       <div className='signin-page' style={{border:"2px solid" , width:"50%" , margin:"15% 25%"}}>
       <h2>Sign in</h2>
      <label >Email</label><br />
      <input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Enter your email' /><br /><br />
      <label >Password</label><br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Enter your password' /><br /><br />
      <button onClick={LoginUser}>Sign up</button>
    </div>
    
  )
}

export default Signin
