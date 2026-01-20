import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "Empower Your Financial Future",
      subtitle: "Join the largest micro-tasking community and start earning daily by completing simple tasks from anywhere.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
      btnText: "Get Started",
    },
    {
      id: 2,
      title: "High Quality Results for Businesses",
      subtitle: "Need quick tasks done? Our global workforce is ready to help you grow your business with verified data and speed.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      btnText: "Post a Task",
    },
    {
      id: 3,
      title: "Fast, Secure & Trusted Platform",
      subtitle: "With instant withdrawals and 24/7 support, we ensure a seamless experience for both workers and employers.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      btnText: "Explore Tasks",
    },
  ];

  return (
    <section className="relative h-[100vh] w-full top-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/60 dark:bg-[#060010]/80"></div>
              </div>

              {/* Content Area */}
              <div className="relative z-10 h-full max-width-container flex flex-col justify-center items-start px-6 md:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <h4 className="text-brand font-bold uppercase tracking-[4px] mb-4 text-sm md:text-base">
                    MicroEarn Platform
                  </h4>
                  <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-brand text-white font-bold rounded-full shadow-lg shadow-brand/30 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                      {slide.btnText}
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition-all cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Custom Styling */}
      <style jsx global>{`
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white !important;
          background: rgba(82, 39, 255, 0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(5px);
        }
        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .hero-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #5227ff !important;
          opacity: 1;
          width: 25px;
          border-radius: 10px;
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  );
}