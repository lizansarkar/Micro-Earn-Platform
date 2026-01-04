import { useEffect, useState } from "react";
import useAuth from "./useAuth"; 
// ⬆️ useAuth থেকে আমরা user পাবো (Firebase user)

const useRole = () => {
  const { user } = useAuth(); 
  // ⬆️ বর্তমানে লগইন করা user

  const [role, setRole] = useState(null);
  // ⬆️ এখানে user এর role রাখবো (admin / worker / buyer)

  const [roleLoading, setRoleLoading] = useState(true);
  // ⬆️ role লোড হচ্ছে কিনা বোঝার জন্য

  useEffect(() => {
    if (user?.email) {
      // ⬇️ backend এ request যাবে email দিয়ে
      fetch(`http://localhost:5000/users/role/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setRole(data.role); 
          // ⬆️ backend থেকে যে role আসবে সেটা set করলাম
          setRoleLoading(false);
        });
    }
  }, [user]);

  return { role, roleLoading };
  // ⬆️ এই দুইটা আমরা AdminRoute / WorkerRoute এ ব্যবহার করবো
};

export default useRole;
