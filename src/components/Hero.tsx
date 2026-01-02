import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 font-semibold text-lg">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Yarramaddu <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">BhanuTeja</span> Reddy
              </h1>
              <p className="text-xl text-gray-600">Full Stack Web Developer | IoT & Data Solutions</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              I build scalable web applications with modern technologies. Specialized in IoT integration, data visualization, and secure backend systems. Currently crafting impactful solutions at Tantragyaan Solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
              >
                Get in touch
                <ArrowRight size={20} />
              </button>
              <a
                href="/BhanuTeja.pdf"
                download="BhanuTeja_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Download CV
                <Download size={20} />
              </a>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">2+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-gray-600">Tech Skills</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl transform -skew-y-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl flex items-center justify-center border-2 border-blue-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-gray-600 font-semibold">Full Stack Developer</p>
                  <p className="text-gray-500 text-sm mt-2">React • Node.js • TypeScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
