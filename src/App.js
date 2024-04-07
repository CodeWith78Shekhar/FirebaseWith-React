//Firestore
import React from 'react'
import Firestore from "./Components/FirestoreSetup/Firestore"
import RealtimeData from './Components/RealtimeDatabase'
const App = () => {
  return (
    <div>
      {/* <Firestore/> */}
      <RealtimeData></RealtimeData>
    </div>
  )
}

export default App






// //authentication
// import React from 'react'
// import Signup from './Pages/Signup'
// import Signin from './Pages/Signin'
// import { getAuth , onAuthStateChanged, signOut } from 'firebase/auth'
// import { app } from './firebase'
// import { useEffect , useState } from 'react'

// const auth = getAuth(app);
// const App = () => {
// const [user , setUser] = useState(null)
//   useEffect(()=>{
//     onAuthStateChanged(auth , (user)=>{
//       if(user){
//         //yes you are logged in
//         setUser(user)
//         console.log("Hello " , user);
//       }else{
//         //user is logged out
//         setUser(null)
//         console.log("you are logged out")
//       }
//     })
//   })

//   if(user === null){
//     return (
//       <div>
//       <Signup/>
//       <Signin/>
//     </div>
//     )
//   }


//   return (
//    <div>
//     <h1>Hello {user.email}</h1>
//     <button onClick={()=> signOut(auth)}>Logout</button>
//    </div>
//   )
// }

// export default App







