"use client";
import React from "react"

const services = [
  {
    title: "Architecture Design",
    desc: "Perancangan bangunan hunian dan komersial dengan pendekatan kontekstual, fungsional, dan estetika yang berkelanjutan.",
  },
  {
    title: "Interior Design",
    desc: "Desain interior yang menyatu dengan karakter ruang, mengutamakan kenyamanan, material berkualitas, dan detail presisi.",
  },
  {
    title: "Construction & Supervision",
    desc: "Pendampingan konstruksi dan pengawasan untuk memastikan desain terbangun sesuai standar kualitas dan rencana.",
  },
  {
    title: "Consultation & Planning",
    desc: "Konsultasi desain, studi tapak, hingga perencanaan awal untuk membantu klien mengambil keputusan yang tepat.",
  },
]

const Services = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl justify-center text-center mx-auto">
          <span className="text-md font-bold tracking-widest text-yellow-400 justify-center">
            OUR SERVICES
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Professional Architecture
            <br />
            & Interior Services
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Braga Studio menyediakan layanan arsitektur dan desain interior
            menyeluruh — dari konsep hingga realisasi, dengan pendekatan yang
            presisi dan berorientasi pada kualitas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl"
            >
              {/* Number */}
              <div className="mb-6 text-sm font-medium text-yellow-400 border border-yellow-400 rounded-full w-10 h-10 flex justify-center items-center">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {service.desc}
              </p>

              {/* Accent line */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
