import React from "react";

const HeroSection = ({ heading, text, fBtn, sBtn, classHeading }) => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b
    from-[#007a8a]
    via-[#2fa4b3]
    to-[white]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>

      {/* Content */}
      <div className="relative py-34 lg:py-36">
        <div className="mx-auto max-w-3xl text-center text-white">
          {/* Heading */}
          <h1 className={`mb-6 font-bold ${classHeading}`}>{heading}</h1>

          {/* Text */}
          <p className="mb-12 text-lg text-white/90 sm:text-xl">{text}</p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            {fBtn && (
              <a
                href={fBtn.link}
                className="
        inline-flex items-center gap-3
        h-14 px-10
        rounded-2xl
        bg-[rgba(0,122,134,0.65)]
        backdrop-blur-md
        text-white font-semibold text-base
        shadow-[0_10px_25px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]
        transition-all duration-300
        hover:bg-[rgba(0,122,134,0.85)]
        hover:-translate-y-1
      "
              >
                {fBtn.label}
                <span className="text-lg">→</span>
              </a>
            )}

            {sBtn && (
              <a
                href={sBtn.link}
                className="
        inline-flex items-center gap-3
        h-14 px-10
        rounded-2xl
        bg-[rgba(0,122,134,0.65)]
        backdrop-blur-md
        text-white font-semibold text-base
        shadow-[0_10px_25px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]
        transition-all duration-300
        hover:bg-[rgba(0,122,134,0.85)]
        hover:-translate-y-1
      "
              >
                {sBtn.label}
                <span className="text-lg">→</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
    </section>
  );
};

export default HeroSection;
