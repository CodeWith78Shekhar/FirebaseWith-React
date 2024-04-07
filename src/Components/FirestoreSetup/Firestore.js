import React from 'react'
import {getFirestore , collection , addDoc , doc , getDoc , query , getDocs, where , updateDoc} from "firebase/firestore"
import { app } from '../../firebase'

const firestore = getFirestore(app)

const Firestore = () => {

    const writeData = async ()=>{
        const result = await addDoc(collection(firestore , "cities"), {
            name:"delhi",
            pincode:321608,
            lat:123,
            long: 456,
        })
        console.log("result" , result)
    }


const makeSubCollection = async ()=>{
    await addDoc(collection(firestore , "cities/xBbxBYuajw5JU49sFg2g/places"),{
        name: "chandani chowk",
        desc: "Awesome place ",
        date: Date.now(),
    })
}

const getDocument =async()=>{
    const ref = doc(firestore , "cities" , "xBbxBYuajw5JU49sFg2g");
    const snap = await getDoc(ref)
    console.log(snap.data())
}
 
const getDocumentsByQuery = async()=>{
    const collectionRef = collection(firestore , "user");
    const qry = query(collectionRef , where("isMale","==" , true));
    const snapshot = await getDocs(qry);
    snapshot.forEach((data)=> console.log(data.data()))
  
}

const update =async ()=>{
    const docRef = doc(firestore , 'cities' , 'xBbxBYuajw5JU49sFg2g');
    await updateDoc(docRef , {
        name : 'Jaipur'
    })
}
  return (
    <div>
      <h1>Firesbase firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put sub Data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentsByQuery}>Get query Document</button>
      <button onClick={update}>update Document</button>
    </div>
  )
}

export default Firestore
