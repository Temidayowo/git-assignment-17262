import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_50%_0%,#22c55e22_0%,transparent_60%)] bg-[#0d0f14] w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-48 py-7 font-dm-sans">
      <div className="flex items-center justify-center gap-2.5 bg-[#22c55e33] border border-[#22c55e33] rounded-3xl py-1.5 px-3.5">
        <span className="bg-[#22c55e] h-1.5 w-1.5 rounded-full animate-pulse-opacity"></span>
        <p className="uppercase font-dm-sans text-xs sm:text-sm text-[#22c55e] tracking-wide">
          available for new projects
        </p>
      </div>
      <h1 className="font-syne text-white font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-8xl mt-6 text-center">
        Building digital experience that <br />
        <span className="text-[#22c55e]">converts</span>
      </h1>
      <div className="max-w-5xl">
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-center px-2">
          I help ambitious brands and startups build high-performance web
          applications and landing pages that drive measurable results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
          <button className="bg-[#22c55e] hover:bg-[#22c55e]/90 px-6 sm:px-8 rounded-full py-3 sm:py-5 text-sm sm:text-lg text-white transition-colors duration-300 border border-[#22c55e] font-dm-sans w-full sm:w-auto cursor-pointer">
            See My Work
          </button>
          <button className="bg-transparent hover:bg-[#1a1b20] px-6 sm:px-8 rounded-full py-3 sm:py-5 text-sm sm:text-lg text-white transition-colors duration-300 border border-[#222633] font-dm-sans flex items-center justify-center gap-4 w-full sm:w-auto cursor-pointer">
            <FaWhatsapp className="size-5 sm:size-6 text-[#6bc16b]" />
            Hire Me on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
