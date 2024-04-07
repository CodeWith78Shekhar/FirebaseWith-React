
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAbnGSKVZsJIbSczJo8w67cSBN_LAkTm4",
  authDomain: "app-4e877.firebaseapp.com",
  projectId: "app-4e877",
  storageBucket: "app-4e877.appspot.com",
  messagingSenderId: "774247337328",
  appId: "1:774247337328:web:007cd15a8800dee85113b5",
  databaseURL: 'https://app-4e877-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);