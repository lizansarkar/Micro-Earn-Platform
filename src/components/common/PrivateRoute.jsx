import { Navigate, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {

  const { user, loading } = useAuth();
  const location = useLocation();

  // auth state এখনো check হচ্ছে
  if (loading) {
    return <p>Loading...</p>;
    // চাইলে spinner বসাতে পারো
  }

  // user না থাকলে login page এ পাঠাবে
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // user থাকলে protected page দেখাবে
  return children;
};

export default PrivateRoute;
