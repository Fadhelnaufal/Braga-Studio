import Image from "next/image";
import { Metadata } from "next";
import AboutStats from "../components/AboutStats";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "About Us | Braga Studio",
  description: "Mengenal lebih dekat filosofi desain dan tim Braga Studio.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black pt-20 lg:pt-24">

        {/* 1. HERO */}
        <section className="px-5 lg:px-10 py-20 lg:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h4 className="text-yellow-500 font-bold tracking-widest uppercase mb-4 text-sm">
                Who We Are
              </h4>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Designing <br />
                <span className="text-yellow-400">Better Living.</span>
              </h1>
            </div>

            <div className="lg:pl-10">
              <p className="text-lg text-gray-600 leading-relaxed">
                Braga Studio adalah kolektif arsitek dan desainer interior
                berbasis di Ponorogo. Kami percaya bahwa ruang bukan sekadar
                tempat bernaung, tetapi medium ekspresi, fungsi, dan karakter
                penghuninya.
              </p>
            </div>
          </div>
        </section>

        {/* 2. IMAGE */}
        <section className="relative w-full h-[50vh] lg:h-[70vh]">
          <Image
            src="/images/about-studio.png"
            alt="Braga Studio Workspace"
            fill
            priority
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/10" />
        </section>

        {/* 3. STATS (COUNT UP) */}
        <AboutStats />

        {/* 4. PHILOSOPHY */}
        <section className="px-5 lg:px-10 py-24 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Filosofi Kami</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            “Kami memadukan estetika modern dengan fungsi praktis. Di Braga
            Studio, kami tidak hanya mendesain bangunan, kami menciptakan
            pengalaman ruang yang bermakna.”
          </p>

          <div className="mt-10">
            <a
              href="/projects"
              className="inline-block border-b-2 border-black pb-1 font-semibold hover:text-yellow-600 hover:border-yellow-600 transition-colors"
            >
              Lihat Karya Kami →
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
