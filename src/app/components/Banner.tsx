import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="m-2">
      <div className="relative min-w-full overflow-hidden rounded-xl mb-20 px-2 group">
        {/* Background Image dengan efek zoom halus saat hover */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <Image
            src="/images/bg-hero.png"
            alt="Consultation Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay Gelap + Blur (Agar teks sangat jelas) */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Konten */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 px-8 py-8 md:px-16">
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Punya visi untuk <br /> ruang Anda?
            </h3>
            <p className="text-gray-300 text- font-light">
              Mari diskusikan dan wujudkan ide arsitektur impian Anda bersama
              tim ahli kami.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center justify-center rounded-full border border-yellow-400 px-10 py-4 text-sm font-bold text-yellow-400 uppercase tracking-wider transition-all duration-300 hover:bg-yellow-400 hover:text-black"
          >
            Mulai Konsultasi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
