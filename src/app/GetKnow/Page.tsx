"use client";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "+", label: "Completed Projects" },
  { value: 30, suffix: "+", label: "Trusted Clients" },
  { value: 100, suffix: "%", label: "Design Commitment" },
];

const GetKnow = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 -mt-24 ">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        // PERUBAHAN DISINI:
        // once: false -> Artinya animasi akan jalan terus (muncul/hilang) setiap kali di-scroll
        viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        
        className="rounded-2xl bg-white shadow-xl border border-gray-100 p-8 lg:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT – TEXT */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              About Braga Studio
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              Braga Studio is an architecture and interior design studio focused
              on creating functional, timeless, and context-driven spaces. We
              believe great design emerges from precision, collaboration, and
              thoughtful detailing.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((item, index) => (
                <div key={index} className="relative pl-4">
                  <span className="absolute left-0 top-1 h-10 w-[3px] bg-yellow-400 rounded-full" />
                  
                  <div className="text-3xl font-semibold text-gray-900 flex items-center">
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      enableScrollSpy={true}
                      scrollSpyOnce={true} // Angka tetap diam setelah sekali muncul (lebih enak dilihat)
                    >
                      {({ countUpRef }) => (
                        <span ref={countUpRef} /> 
                      )}
                    </CountUp>
                    <span className="ml-1">{item.suffix}</span>
                  </div>
                  
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <Link href="/about" className="group relative h-[420px] rounded-xl overflow-hidden block cursor-pointer">
            <img
              src="/images/about-studio.png"
              alt="Braga Studio Architecture"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium text-lg border border-white/50 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Get to know us &rarr;
              </span>
            </div>
          </Link>
          
        </div>
      </motion.div>
    </section>
  );
};

export default GetKnow;