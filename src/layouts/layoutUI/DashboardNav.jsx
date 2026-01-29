import { Bell, Menu, Coins } from "lucide-react";
import useAuth from "../../hooks/UseAuth";

const DashboardNav = ({ setSidebarOpen }) => {
  const { user, coinBalance, userRole } = useAuth(); // coinBalance ডাটাবেস থেকে আসবে

  return (
    <header className="w-full bg-white/[0.03] border border-white/5 rounded-[2rem] px-6 py-4 flex items-center justify-between backdrop-blur-md">
      <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white/60">
        <Menu />
      </button>

      {/* ইউজার স্ট্যাটাস */}
      <div className="flex items-center gap-6 ml-auto">
        {/* কয়েন ডিসপ্লে */}
        <div className="bg-brand/10 border border-brand/20 px-4 py-2 rounded-full flex items-center gap-3">
          <Coins className="text-brand" size={18} />
          <span className="font-black text-brand text-sm">{coinBalance || 0}</span>
        </div>

        {/* রোল ইন্ডিকেটর */}
        <div className="hidden md:flex flex-col text-right">
          <span className="text-white font-black text-xs uppercase tracking-tighter italic leading-none">{user?.displayName}</span>
          <span className="text-brand text-[9px] font-bold uppercase tracking-[2px] mt-1">{userRole}</span>
        </div>

        {/* প্রোফাইল ইমেজ */}
        <div className="relative group cursor-pointer">
          <img src={user?.photoURL} className="w-10 h-10 rounded-xl border-2 border-brand/30 object-cover" alt="" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#020008] rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;