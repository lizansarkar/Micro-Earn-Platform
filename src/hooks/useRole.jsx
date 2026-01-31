import { useEffect, useState } from "react";
import useAuth from "./UseAuth";

const useRole = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    // ১. মেইন Auth লোডিং অবস্থায় থাকলে রোল লোডিং থামিয়ে রাখা যাবে না
    if (loading) {
      setRoleLoading(true);
      return;
    }

    // ২. যদি লগইন করা ইউজার না থাকে
    if (!user?.email) {
      setRole(null);
      setRoleLoading(false);
      return;
    }

    // ৩. ডাটা ফেচিং শুরু
    let isMounted = true;
    
    const fetchUserRole = async () => {
      try {
        setRoleLoading(true);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users/role/${user.email}`);
        const data = await res.json();
        
        if (isMounted) {
          setRole(data?.role || null);
          setRoleLoading(false);
        }
      } catch (error) {
        console.error("Role fetch error:", error);
        if (isMounted) {
          setRole(null);
          setRoleLoading(false);
        }
      }
    };

    fetchUserRole();

    // ক্লিনআপ ফাংশন (মেমোরি লিক রোধে)
    return () => {
      isMounted = false;
    };
  }, [user?.email, loading]); 

  return { role, roleLoading };
};

export default useRole;