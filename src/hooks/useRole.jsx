import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loading } = useAuth();

  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {

    // যদি auth এখনো loading হয়
    if (loading) return;

    // user না থাকলে
    if (!user?.email) {
      setRole(null);
      setRoleLoading(false);
      return;
    }

    setRoleLoading(true);

    fetch(`${import.meta.env.VITE_API_URL}/users/role/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setRole(data?.role || null);
        setRoleLoading(false);
      })
      .catch(error => {
        console.error("Role fetch error:", error);
        setRole(null);
        setRoleLoading(false);
      });

  }, [user, loading]);

  return { role, roleLoading };
};

export default useRole;
