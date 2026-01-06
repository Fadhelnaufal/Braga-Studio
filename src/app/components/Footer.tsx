"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-gray-900">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        
        {/* --- SECTION 1: CTA BANNER --- */}
        

        {/* --- SECTION 2: MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand (4 cols width) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative h-24 w-64">
              <Image
                src="/images/bragahitam.png"
                alt="Braga Studio Logo"
                fill
                className="object-contain object-left invert brightness-0 "
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Studio arsitektur dan desain interior yang berbasis di Ponorogo. 
              Kami memadukan fungsionalitas, estetika modern, dan prinsip keberlanjutan dalam setiap karya.
            </p>
          </div>

          {/* Column 2: Menu (2 cols width) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">Menu</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Home', 'About Us', 'Projects', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Kantor (3 cols width) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">Kantor</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-white font-medium mb-1">Ponorogo HQ</span>
                Jl. Braga No. 123, Ponorogo<br />
                Jawa Timur, Indonesia 63411
              </li>
              <li className="pt-2 flex flex-col gap-2">
                <a href="mailto:hello@bragastudio.com" className="hover:text-white transition-colors">
                  hello@bragastudio.com
                </a>
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  +62 812 3456 7890
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social (3 cols width) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">Social</h4>
            <div className="flex gap-3">
              {[
                { name: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01' },
                { name: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z' },
                { name: 'WhatsApp', path: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' }
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={icon.name}
                  className="bg-gray-900 p-3 rounded-full text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon.name === 'Instagram' && <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>}
                    {icon.name === 'LinkedIn' && <circle cx="4" cy="4" r="2"></circle>}
                    <path d={icon.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- SECTION 3: COPYRIGHT --- */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {currentYear} Braga Studio. Designed & Built in Indonesia.</p>
          <div className="flex gap-8 mt-4 md:mt-0 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}