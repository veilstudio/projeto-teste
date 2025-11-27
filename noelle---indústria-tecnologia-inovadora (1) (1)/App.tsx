import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessSectors from './components/BusinessSectors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Target, Award, Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BusinessSectors />
        
        {/* Modern "Vision/About" Section */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative mb-12 lg:mb-0">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Engenharia de Precisão" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                    <p className="text-white font-medium text-lg">"Qualidade não é um ato, é um hábito."</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-100 mb-6">
                  Sobre a Noelle
                </div>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                  Inovação sediada em Palmela, <br/>
                  <span className="text-indigo-600">Impacto global.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  No Parque Industrial Vale do Alecrim, transformamos matérias-primas e conceitos em soluções tangíveis. A nossa abordagem multidisciplinar permite-nos servir setores desde a hotelaria à indústria pesada com a mesma excelência.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600">
                        <Target className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">Rigor Técnico</h4>
                      <p className="mt-1 text-slate-600">Controlo de qualidade rigoroso em todos os lotes de produção e componentes importados.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-50 text-teal-600">
                        <Globe2 className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">Sustentabilidade</h4>
                      <p className="mt-1 text-slate-600">Compromisso com fórmulas biodegradáveis e equipamentos de baixo consumo energético.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-50 text-slate-600">
                        <Award className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">Certificação</h4>
                      <p className="mt-1 text-slate-600">Cumprimento integral das normas europeias de segurança e ambiente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;