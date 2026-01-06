import Image from "next/image"
import React from "react"

const reasons = [
  {
    number: "01",
    title: "Design with Purpose",
    description:
      "Setiap desain berangkat dari kebutuhan klien, konteks lokasi, dan fungsi ruang — bukan sekadar estetika visual.",
  },
  {
    number: "02",
    title: "Thoughtful Process",
    description:
      "Proses kerja yang terstruktur, transparan, dan kolaboratif dari konsep hingga realisasi.",
  },
  {
    number: "03",
    title: "Timeless Architecture",
    description:
      "Kami merancang ruang yang tidak hanya relevan hari ini, tetapi tetap bernilai dalam jangka panjang.",
  },
  {
    number: "04",
    title: "Professional Commitment",
    description:
      "Komitmen penuh pada kualitas detail, komunikasi yang jujur, dan hasil yang dapat dipertanggungjawabkan.",
  },
]

const WhyBragaStudio = () => {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative h-[420px] lg:h-[560px] overflow-hidden rounded-2xl">
            <Image
              src="/images/potrait.png"
              alt="Braga Studio Architecture"
              fill
              className="object-cover"
              priority
            />
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Header */}
            <span className="text-sm font-semibold tracking-widest uppercase text-yellow-500">
              Why Braga Studio
            </span>

            <h2 className="mt-4 mb-12 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-snug">
              Architecture driven by
              <br />
              clarity, precision, and purpose.
            </h2>

            {/* Reasons */}
            <div className="space-y-10">
              {reasons.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-6 border-l-2 border-gray-200 pl-6 hover:border-yellow-400 transition-colors duration-300"
                >
                  <div className="text-yellow-500 font-semibold text-sm">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyBragaStudio
