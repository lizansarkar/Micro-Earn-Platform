import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/*
  useAuth হলো একটা custom hook
  👉 এটা AuthContext থেকে সব auth data আনে
  👉 যেন যেকোনো component থেকে সহজে ব্যবহার করা যায়
*/
const useAuth = () => {

  // AuthContext থেকে value গুলো নিচ্ছি
  const auth = useContext(AuthContext);

  // Safety check (AuthProvider ছাড়া ব্যবহার হলে error)
  if (!auth) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return auth;
};

export default useAuth;
