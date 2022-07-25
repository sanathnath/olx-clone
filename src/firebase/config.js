import { initializeApp } from "firebase/app";
import { getFirestore,collection } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAuQlvy29Rw-DausUh0o8dtnePdWaFfcXU",
  authDomain: "olx-clone-d3408.firebaseapp.com",
  projectId: "olx-clone-d3408",
  storageBucket: "olx-clone-d3408.appspot.com",
  messagingSenderId: "742689579200",
  appId: "1:742689579200:web:74bda9d8390f9077368d25",
  measurementId: "G-JFRC67WLS6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//initialize service
const db = getFirestore()
export const storage = getStorage(app)

//collection
export const colref_user = collection(db,"users")

export const colref_prod = collection(db,"products")
