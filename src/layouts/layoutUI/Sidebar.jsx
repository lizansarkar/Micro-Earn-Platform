import { NavLink } from "react-router";
import { 
  LayoutDashboard, User, CheckSquare, ListTodo, 
  Wallet, History, Users, ShieldAlert, PlusCircle, LayoutList
} from "lucide-react";
import useAuth from "../../hooks/UseAuth"; // আপনার অ্যাথ হুক

 const Sidebar = ({ setSidebarOpen }) => {
  const { user, userRole } = useAuth(); // ধরে নিচ্ছি userRole হুক থেকে আসছে

  // ৩টি রোলের জন্য আলাদা মেনু সেট
  const menuItems = {
    worker: [
      { name: "Home", path: "/dashboard/worker", icon: <LayoutDashboard size={20}/> },
      { name: "My Submissions", path: "/dashboard/worker/submissions", icon: <CheckSquare size={20}/> },
      { name: "Withdraw", path: "/dashboard/worker/withdraw", icon: <Wallet size={20}/> },
    ],
    buyer: [
      { name: "Home", path: "/dashboard/buyer", icon: <LayoutDashboard size={20}/> },
      { name: "Add Task", path: "/dashboard/buyer/add-task", icon: <PlusCircle size={20}/> },
      { name: "My Tasks", path: "/dashboard/buyer/my-tasks", icon: <LayoutList size={20}/> },
      { name: "Purchase Coin", path: "/dashboard/buyer/purchase", icon: <History size={20}/> },
    ],
    admin: [
      { name: "Home", path: "/dashboard/admin", icon: <LayoutDashboard size={20}/> },
      { name: "Manage Users", path: "/dashboard/admin/users", icon: <Users size={20}/> },
      { name: "Manage Tasks", path: "/dashboard/admin/tasks", icon: <ShieldAlert size={20}/> },
    ],
  };

  const currentMenu = menuItems[userRole?.toLowerCase()] || [];

  const activeLink = "bg-brand text-white shadow-[0_0_20px_rgba(82,39,255,0.4)]";
  const normalLink = "text-white/40 hover:bg-white/5 hover:text-white";

  return (
    <div className="w-64 h-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 flex flex-col backdrop-blur-2xl">
      <div className="mb-10 px-4">
        <h2 className="text-2xl font-black italic tracking-tighter text-brand">MicroEarn</h2>
        <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/20">Control Center</span>
      </div>

      <nav className="flex-1 space-y-2">
        {currentMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) => `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest ${isActive ? activeLink : normalLink}`}
          >
            {item.icon} {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="pt-6 border-t border-white/5">
        <button className="flex items-center gap-4 px-5 py-4 w-full text-white/40 hover:text-red-400 transition-colors font-bold text-xs uppercase tracking-widest">
           Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;