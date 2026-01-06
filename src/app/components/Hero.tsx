"use client"

import { useEffect, useState } from "react"

const Hero = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35) // parallax strength
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Parallax Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translateY(${offset}px)`,
          willChange: "transform",
        }}
      >
        {/* Desktop Video */}
        <video
          className="hidden md:block h-full w-full object-cover"
          src="/images/video-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg-hero.png"
        />

        {/* Mobile Fallback Image */}
        <img
          src="/images/bg.png"
          alt="Braga Studio Architecture"
          className="block md:hidden h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] text-white">
              Designing Spaces with
              <span className="block mt-2 text-yellow-400">
                Purpose & Precision
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 mx-auto max-w-xl text-base md:text-lg leading-relaxed text-white/80">
              Braga Studio menghadirkan arsitektur dan desain interior yang
              mengutamakan fungsi, estetika, dan keberlanjutan — dirancang dengan
              pendekatan profesional dan detail yang matang.
            </p>

            {/* Actions */}
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Let’s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
