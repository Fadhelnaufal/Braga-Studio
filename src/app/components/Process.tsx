export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Brief",
      description: "Kami mendengarkan visi, kebutuhan, dan anggaran Anda. Ini adalah tahap memahami karakter Anda untuk diterjemahkan ke dalam ruang.",
    },
    {
      number: "02",
      title: "Concept Design",
      description: "Tim kami mengolah ide menjadi sketsa awal, moodboard, dan layout tata ruang untuk memastikan arah desain sesuai ekspektasi.",
    },
    {
      number: "03",
      title: "Development & Detail",
      description: "Pembuatan gambar kerja teknis (DED), pemilihan material, dan rencana anggaran biaya (RAB) yang presisi.",
    },
    {
      number: "04",
      title: "Build & Realization",
      description: "Proses konstruksi atau renovasi dimulai dengan pengawasan berkala dari tim kami untuk menjaga kualitas hingga serah terima.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 text-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        
        {/* Header Section */}
        <div className="mb-20 max-w-2xl">
          <h4 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-3">
            How We Work
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            From Sketch to <br />
            <span className="relative inline-block">
              Reality.
              {/* Garis bawah kuning dekoratif */}
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10 opacity-60"></span>
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Garis Penghubung (Hanya muncul di Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="group relative bg-neutral-50 md:bg-transparent pt-4 md:pt-0">
              
              {/* Bullet Point di Garis (Desktop Only) */}
              <div className="hidden md:block absolute top-10 left-0 w-4 h-4 rounded-full bg-yellow-400 border-4 border-white shadow-sm z-10 transition-transform duration-300 group-hover:scale-150" />

              {/* Number */}
              <div className="text-6xl font-bold text-gray-200 mb-6 transition-colors duration-300 group-hover:text-yellow-400/50">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}