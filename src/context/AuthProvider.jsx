import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  // current user state
  const [user, setUser] = useState(null);

  // loading state (route guard, spinner এর জন্য)
  const [loading, setLoading] = useState(true);

  // register user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update profile (name, photo)
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInformation = {
    user,
    loading,
    registerUser,
    signInUser,
    signInWithGoogle,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;