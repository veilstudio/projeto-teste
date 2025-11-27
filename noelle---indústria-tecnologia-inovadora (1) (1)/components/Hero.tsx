import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      {/* Background with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-20 transform scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-indigo-950/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="lg:w-3/4">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
            Excelência Industrial em Portugal
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8">
            Engenharia que ilumina, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
              Química que transforma.
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Desenvolvimento de ponta em iluminação, eletrónica e soluções químicas. 
            A parceira estratégica para indústrias que exigem rigor e inovação.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-1"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#sectors"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Explorar Setores
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400">
        <ChevronDown className="h-8 w-8 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;