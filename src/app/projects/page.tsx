import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Braga Studio",
  description: "Selected architectural and interior design projects by Braga Studio.",
};

const projects = [
  {
    id: 1,
    title: "Braga House",
    category: "Residential",
    year: "2024",
    image: "/images/workingspace.png",
    href: "/projects/braga-house",
  },
  {
    id: 2,
    title: "Urban Minimal Residence",
    category: "Residential",
    year: "2023",
    image: "/images/about-studio.png",
    href: "/projects/urban-minimal",
  },
  {
    id: 3,
    title: "Commercial Space Ponorogo",
    category: "Commercial",
    year: "2023",
    image: "/images/studio.png",
    href: "/projects/commercial-space",
  },
  {
    id: 4,
    title: "Interior Studio Concept",
    category: "Interior",
    year: "2022",
    image: "/images/minimalist.png",
    href: "/projects/interior-studio",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-20">
      
      {/* 1. HERO SECTION: Big & Bold */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto mb-20 lg:mb-32">
        <div className="border-b border-black pb-8">
          <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
            Selected <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              Works.
            </span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
          <p className="max-w-xl text-lg text-gray-500 font-light">
            Kumpulan karya terkurasi yang mengeksplorasi batas antara fungsi, 
            estetika material, dan pengalaman ruang.
          </p>
          <span className="text-sm font-bold border rounded-full px-4 py-1 border-gray-300">
            {projects.length} Projects
          </span>
        </div>
      </section>

      {/* 2. ASYMMETRIC GRID */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 lg:gap-y-0">
          
          {projects.map((project, index) => {
            // Logika Asimetris:
            // Jika index ganjil (1, 3, ...), kita dorong ke bawah dengan margin-top besar
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={project.id} 
                className={`group relative flex flex-col ${!isEven ? "lg:mt-32" : ""}`}
              >
                {/* Image Container with Overflow Hidden for Zoom Effect */}
                <Link href={project.href} className="block overflow-hidden mb-6 relative w-full aspect-[4/5] lg:aspect-[3/4]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Overlay Year (Optional Stylistic Choice) */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold">
                    {project.year}
                  </div>
                </Link>

                {/* Text Content */}
                <div className="flex justify-between items-end border-b border-gray-200 pb-4 transition-all duration-300 group-hover:border-black">
                  <div>
                    <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-gray-600 transition-colors">
                      <Link href={project.href}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                  
                  {/* Arrow Icon that appears on hover */}
                  <div className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 3. BOTTOM NAV (Next Steps) */}
      <section className="mt-32 text-center">
        <Link href="/contact" className="inline-block text-lg font-medium hover:text-yellow-600 transition-colors underline underline-offset-4">
          Tertarik bekerja sama? Hubungi Kami &rarr;
        </Link>
      </section>

    </main>
  );
}