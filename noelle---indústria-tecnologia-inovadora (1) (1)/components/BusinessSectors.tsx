import React from 'react';
import { Zap, Cpu, Droplets, ArrowUpRight } from 'lucide-react';
import { BusinessUnit } from '../types';

const sectors: BusinessUnit[] = [
  {
    title: 'Iluminação & Elétrica',
    description: 'Soluções luminotécnicas avançadas e eficiência energética para grandes infraestruturas.',
    icon: <Zap className="h-8 w-8 text-white" />,
    features: ['LED Industrial', 'Iluminação Pública', 'Eficiência A+']
  },
  {
    title: 'Componentes & Eletrónica',
    description: 'Fabrico de precisão e distribuição de componentes eletrónicos críticos.',
    icon: <Cpu className="h-8 w-8 text-white" />,
    features: ['Sensores IoT', 'Placas PCB', 'Microcontroladores']
  },
  {
    title: 'Química & Detergentes',
    description: 'Fórmulas industriais potentes desenvolvidas para máxima performance e segurança.',
    icon: <Droplets className="h-8 w-8 text-white" />,
    features: ['Desengordurantes', 'Tratamento de Pisos', 'Higiene Fabril']
  }
];

const BusinessSectors: React.FC = () => {
  return (
    <section id="sectors" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2">Áreas de Atuação</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Soluções Integradas <br/>para Indústrias Exigentes.
            </h3>
          </div>
          <p className="text-slate-600 max-w-md text-lg leading-relaxed">
            Combinamos engenharia de precisão com química avançada para entregar resultados que impulsionam o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="h-6 w-6 text-slate-300" />
              </div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                index === 0 ? 'bg-amber-500 shadow-amber-500/30' : 
                index === 1 ? 'bg-indigo-600 shadow-indigo-600/30' : 
                'bg-teal-500 shadow-teal-500/30'
              }`}>
                {sector.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display group-hover:text-indigo-600 transition-colors">
                {sector.title}
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                {sector.description}
              </p>
              
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  {sector.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-slate-500">
                      <span className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        index === 0 ? 'bg-amber-500' : index === 1 ? 'bg-indigo-600' : 'bg-teal-500'
                      }`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative bottom gradient line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ${
                 index === 0 ? 'bg-amber-500' : index === 1 ? 'bg-indigo-600' : 'bg-teal-500'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;