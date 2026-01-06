"use client";

import StatsCounter from "./StatsCounter";

export default function AboutStats() {
  return (
    <section className="px-5 lg:px-10 py-24 bg-yellow-500 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        <div className="border-t border-black pt-6">
          <h3 className="text-4xl font-bold mb-2 text-black">
            <StatsCounter end={50} />+
          </h3>
          <p className="text-black">Projects Completed</p>
        </div>

        <div className="border-t border-black pt-6">
          <h3 className="text-4xl font-bold mb-2 text-black">
            <StatsCounter end={2020} />
          </h3>
          <p className="text-black">Year Established</p>
        </div>

        <div className="border-t border-black pt-6">
          <h3 className="text-4xl font-bold mb-2 text-black">
            <StatsCounter end={100} />%
          </h3>
          <p className="text-black">Client Satisfaction</p>
        </div>

      </div>
    </section>
  );
}
