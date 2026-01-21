import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Controller } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function Testimonials() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    { id: 1, name: "Zayan Ahmed", role: "Micro Worker", image: "https://i.pravatar.cc/150?u=11", comment: "This platform changed my life! I can now earn my pocket money by just spending 2 hours a day. Highly recommended for students!", rating: 5 },
    { id: 2, name: "Sara Khan", role: "Employer", image: "https://i.pravatar.cc/150?u=12", comment: "Getting high-quality data for my business has never been easier. The workers here are fast and very professional.", rating: 5 },
    { id: 3, name: "Tanvir Sadi", role: "Top Earner", image: "https://i.pravatar.cc/150?u=13", comment: "The withdrawal process is super fast. I've already withdrawn $200 without any issues. The UI is just beautiful!", rating: 5 },
    { id: 4, name: "Anika Jahan", role: "Micro Worker", image: "https://i.pravatar.cc/150?u=14", comment: "I love the leaderboard feature! It keeps me motivated to earn more coins and stay at the top. Great experience!", rating: 5 },
    { id: 5, name: "Rakib Ahmed", role: "Freelancer", image: "https://i.pravatar.cc/150?u=15", comment: "The best thing is the instant payment. No need to wait for weeks. Just complete tasks and get paid!", rating: 4 },
  ];

  return (
    <section className="py-16 md:py-24 px-4 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span className="text-brand font-bold uppercase tracking-[3px] text-[10px] md:text-xs mb-3 block">
            Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Trust of <span className="text-brand">Thousands</span>
          </h2>
        </div>

        {/* --- FIXED TOP NAV (Avatar Section) --- */}
        <div className="flex justify-start md:justify-center items-center gap-4 md:gap-8 mb-10 overflow-x-auto pt-10 pb-4 no-scrollbar snap-x">
          {reviews.map((rev, idx) => (
            <div 
              key={rev.id}
              onClick={() => controlledSwiper?.slideTo(idx)}
              className="flex flex-col items-center gap-4 cursor-pointer min-w-[85px] snap-center outline-none group"
            >
              {/* Image Container with Padding to prevent clipping */}
              <div className="relative p-2"> 
                <div className={`relative transition-all duration-500 transform ${activeIndex === idx ? 'scale-125 z-20' : 'scale-100 opacity-40 grayscale group-hover:grayscale-0 z-10'}`}>
                  
                  {/* Glow Effect - Adjusted for Dark/Light Mode */}
                  <div className={`absolute -inset-2 rounded-full blur-md transition-opacity duration-500 ${activeIndex === idx ? 'bg-brand/40 dark:bg-brand/60 opacity-100' : 'bg-transparent opacity-0'}`}></div>
                  
                  <img 
                    src={rev.image} 
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 relative z-10 object-cover bg-white dark:bg-slate-800 ${activeIndex === idx ? 'border-brand' : 'border-slate-300 dark:border-slate-700'}`} 
                    alt={rev.name} 
                  />
                </div>
              </div>

              {/* Name & Indicator */}
              <div className="flex flex-col items-center gap-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeIndex === idx ? 'text-brand' : 'text-slate-400 dark:text-slate-500'}`}>
                  {rev.name.split(' ')[0]}
                </span>
                <div className="h-1 w-8 relative">
                  {activeIndex === idx && (
                    <motion.div layoutId="nav-underline" className="absolute inset-0 bg-brand rounded-full shadow-[0_0_8px_rgba(var(--brand-rgb),0.6)]" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SEGMENTED PROGRESS BAR --- */}
        <div className="max-w-xs md:max-w-md mx-auto flex gap-1.5 h-1 mb-12">
           {reviews.map((_, i) => (
             <div key={i} className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
               {i === activeIndex && (
                 <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-brand"
                 />
               )}
               {i < activeIndex && <div className="h-full bg-brand w-full" />}
             </div>
           ))}
        </div>

        {/* --- MAIN SLIDER --- */}
        <div className="max-w-3xl mx-auto">
          <Swiper
            onSwiper={setControlledSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Autoplay, EffectFade, Controller]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={800}
            autoHeight={true}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="text-center px-4 pb-4">
                  {/* Quote Icon - Color adjusted for visibility in dark mode */}
                  <div className="flex justify-center mb-6 text-brand/10 dark:text-brand/20">
                    <FaQuoteLeft className="text-6xl md:text-7xl" />
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg md:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic"
                  >
                    "{review.comment}"
                  </motion.p>

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-slate-200 dark:text-slate-800"} />
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {review.name}
                  </h4>
                  <p className="text-brand font-bold tracking-[2px] text-[10px] uppercase mt-1">
                    {review.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}