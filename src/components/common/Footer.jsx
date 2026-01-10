import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPaperPlane 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "How it Works", path: "/how-it-works" },
        { name: "Find Tasks", path: "/tasks" },
        { name: "Leaderboard", path: "/leaderboard" },
        { name: "Pricing", path: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Careers", path: "/careers" },
        { name: "Terms of Service", path: "/terms" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Success Stories", path: "/stories" },
        { name: "Blog", path: "/blog" },
        { name: "Privacy Policy", path: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-black/5 dark:border-white/5">
      {/* Background Glow Effect (Dark Mode only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-30"></div>

      <div className="max-width-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* 1. Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img src="/src/assets/logo.png" alt="MicroEarn" className="h-10 w-auto" />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed max-w-sm">
              The world's leading micro-tasking platform. Empowering individuals to earn and businesses to grow through simple, verified tasks.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-brand hover:text-white transition-all text-sm"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Link Groups */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-6 opacity-90">{group.title}</h3>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="text-sm opacity-60 hover:opacity-100 hover:text-brand transition-all flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-[2px] bg-brand mr-0 group-hover:mr-2 transition-all"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. Newsletter Section */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-bold text-sm uppercase tracking-widest opacity-90">Newsletter</h3>
            <p className="text-sm opacity-60">Get updates on new tasks and earning opportunities.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand text-white p-2 rounded-lg hover:scale-105 transition-transform active:scale-95">
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50 font-medium">
            © {currentYear} <span className="text-brand">MicroEarn</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-medium opacity-50">
            <Link to="/privacy" className="hover:text-brand">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand">Terms</Link>
            <Link to="/cookies" className="hover:text-brand">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}