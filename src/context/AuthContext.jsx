import React, { createContext, useContext, useEffect, useState } from 'react'
import app from '../components/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
const AuthContext = createContext()

export function useAuth(){
  return useContext(AuthContext)
}


export function AuthProvider({children}) {
  let auth =getAuth()

  const [currentUser, setCurrentUser] = useState()
  const [loading,setLoading] = useState(true)

  function signup(email, password){
   return createUserWithEmailAndPassword(auth,email,password)
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth,email,password)
  }

  function logout(){
    return signOut(auth)
  }

  useEffect(() =>{
   const unsubscribe = auth.onAuthStateChanged(user => {
    
        setCurrentUser(user)
        setLoading(false)
  })
  return unsubscribe
},[])

  const value ={
    currentUser,
    signup,
    login,
    logout
  }

  return (

    
    <AuthContext.Provider value={value}>

         {!loading&&children}
    </AuthContext.Provider>
  )
}

