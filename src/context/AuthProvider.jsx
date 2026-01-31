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
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // current user state
  const [user, setUser] = useState(null);
  
  // user role state (Database থেকে আসা রোল এখানে থাকবে)
  const [userRole, setUserRole] = useState(null);

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
    setUserRole(null); // Logout করলে রোল ক্লিয়ার করে দেওয়া ভালো
    return signOut(auth);
  };

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (currentUser?.email) {
      try {
        // Axios ব্যবহার করে ডাটা ফেচ
        const response = await axios.get(
          `${import.meta.env.VITE_MY_WEBSITE_URL}/users/role/${currentUser.email}`
        );
        
        // Axios সরাসরি ডাটা অবজেক্ট রিটার্ন করে, তাই response.json() লাগে না
        setUserRole(response.data?.role || null);
        console.log("Fetched user role:", response.data?.role);
      } catch (error) {
        console.error("Error fetching user role:", error.message);
        setUserRole(null);
      }
    } else {
      setUserRole(null);
    }

    setLoading(false);
  });

  return () => unsubscribe();
}, []);

  const authInformation = {
    user,
    userRole,
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