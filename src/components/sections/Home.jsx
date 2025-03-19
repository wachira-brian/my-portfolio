import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-2">
          {/* Image Card */}
          <div className="relative mx-auto mb-6 w-full max-w-[12rem] sm:max-w-[16rem] md:max-w-[28rem] h-[200px] sm:h-[300px] md:h-96">
            <img
              src="/my-portfolio/mypicbig1.png"
              alt="Brian Wachira"
              className="w-full h-full object-cover object-top rounded-lg shadow-lg"
            />
            {/* Blue overlay: solid at bottom, fading smoothly upward */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-500 via-blue-300/40 to-transparent rounded-b-lg pointer-events-none"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm BRIAN WACHIRA
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A full-stack wizard, who whips up scalable web solutions faster
            than you can say "bug fix," and a passionate tech enthusiast.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};