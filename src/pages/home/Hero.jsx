import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Unlock Your Earning Potential",
      subtitle: "Complete simple micro-tasks and get paid instantly. The most trusted platform globally.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
      tag: "Secure Payments",
    },
    {
      id: 2,
      title: "Scale Your Business Faster",
      subtitle: "Leverage our global workforce to handle data entry and testing with 100% accuracy.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tag: "Verified Talent",
    },
    {
      id: 3,
      title: "Work From Anywhere, Anytime",
      subtitle: "No experience needed. All you need is a phone or computer to start your journey.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      tag: "Global Access",
    },
    {
      id: 4,
      title: "Real-Time Tracking & Analytics",
      subtitle: "Monitor your earnings and task progress with our advanced dashboard built for you.",
      image: "https://images.unsplash.com/photo-1551288049-bbda4865cda1?q=80&w=2070&auto=format&fit=crop",
      tag: "Advanced Tools",
    },
    {
      id: 5,
      title: "Join Our Expert Community",
      subtitle: "Connect with thousands of freelancers and share tips to maximize your daily income.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      tag: "Community First",
    },
    {
      id: 6,
      title: "Fast Withdrawals, Zero Fees",
      subtitle: "Get your hard-earned money in your wallet within minutes using our local payment gateways.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop",
      tag: "Instant Payout",
    },
  ];

  const SLIDE_DURATION = 5000; // ৫ সেকেন্ড প্রতি স্লাইড

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden top-7">
      
      {/* --- SEGMENTED PROGRESS BAR (As per your Image) --- */}
      <div className="absolute top-0 left-0 w-full h-1.5 z-50 flex gap-1 px-4 mt-2">
        {slides.map((_, i) => (
          <div key={i} className="h-full flex-1 bg-white/20 rounded-full overflow-hidden">
            {/* Background progress fill */}
            <div 
               className={`h-full transition-all duration-300 ${i < activeIndex ? 'bg-brand' : 'bg-transparent'}`}
               style={{ width: i < activeIndex ? '100%' : '0%' }}
            />
            {/* Active animated fill */}
            {i === activeIndex && (
              <motion.div 
                className="h-full bg-brand shadow-[0_0_10px_#5227ff]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                key={activeIndex} // স্লাইড চেঞ্জ হলে এনিমেশন রিস্টার্ট হবে
              />
            )}
          </div>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: SLIDE_DURATION, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={true}
        loop={true}
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Animated Background */}
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent dark:from-[#060010] dark:via-[#060010]/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </motion.div>

              {/* Content Area */}
              <div className="relative z-10 h-full max-width-container flex flex-col justify-center items-start px-6 md:px-12">
                <div className="max-w-4xl">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-black uppercase tracking-[3px] bg-brand/20 text-brand border border-brand/30 rounded-full backdrop-blur-md"
                  >
                    {slide.tag}
                  </motion.span>

                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-2xl opacity-80"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <div className="flex flex-wrap gap-5">
                    <button className="group relative px-8 py-4 bg-brand text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(82,39,255,0.4)] transition-all active:scale-95 cursor-pointer">
                      <span className="relative z-10">Start Earning</span>
                    </button>
                    
                    <button className="px-8 py-4 glass-effect text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-xl hover:bg-white/10 transition-all border border-white/10 cursor-pointer">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Styling */}
      <style jsx global>{`
        .hero-swiper .swiper-button-next, .hero-swiper .swiper-button-prev {
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          color: white !important;
          border: 1px solid rgba(255,255,255,0.1);
          transition: 0.3s;
        }
        .hero-swiper .swiper-button-next:hover, .hero-swiper .swiper-button-prev:hover {
          background: rgba(255,255,255,0.22);
          border-color: #5227ff;
        }
        .hero-swiper .swiper-button-next:after, .hero-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .hero-swiper .swiper-button-next, .hero-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}