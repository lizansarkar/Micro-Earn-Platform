import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register user
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in user with popup
    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    //update usr profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //sign out function
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    //observer state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInformation = {
        user,
        loading,
        registerUser,
        signInUser,
        signInWithGoogle,
        updateUserProfile,
        logOut,
    }

  return (
    <AuthContext value={authInformation}>
        {children}
    </AuthContext>
  )
}