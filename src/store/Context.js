import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/config';

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null)

export default function Context ({children}){
    const [User, setUser] = useState(null)
    const authInstance = getAuth(app)

    useEffect(() => {
        onAuthStateChanged(authInstance,(user)=>{
        setUser(user);
        })
        
    },[])
    return(
        <AuthContext.Provider value={{User}} >
            {children}
        </AuthContext.Provider>
    )
}