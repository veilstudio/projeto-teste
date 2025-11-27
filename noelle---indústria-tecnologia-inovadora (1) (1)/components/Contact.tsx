import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Helper function to encode data for Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error(error);
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2">Fale Connosco</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Estamos à espera do seu contacto.
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Envie-nos uma mensagem sobre o seu projeto ou visite as nossas instalações.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Form Section (Left) */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h4>
            
            {status === 'SUCCESS' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Recebida!</h3>
                <p className="text-green-700 mb-6">Agradecemos o seu contacto. A nossa equipa irá responder em breve.</p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="mt-6 text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Netlify Hidden Input for React */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="Ex: Orçamento para iluminação LED"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                {status === 'ERROR' && (
                   <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
                     Ocorreu um erro ao enviar. Por favor, verifique a sua conexão.
                   </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'SENDING'}
                  className="w-full bg-indigo-600 text-white font-bold py-4 rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'SENDING' ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" /> Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
            
            <p className="text-xs text-slate-400 mt-4 text-center">
              Processado via Netlify Secure Forms.
            </p>
          </div>

          {/* Info & Map Section (Right) */}
          <div className="w-full lg:w-1/2 bg-slate-900 text-white p-8 lg:p-12 relative flex flex-col">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-600 rounded-full opacity-20 filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-600 rounded-full opacity-20 filter blur-3xl"></div>

            <div className="relative z-10 mb-8">
              <h4 className="text-2xl font-bold mb-8">Informações de Contacto</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-indigo-300" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">Sede & Fábrica</h5>
                    <p className="mt-1 text-slate-300">
                      Parque Industrial Vale do Alecrim<br/>
                      Rua do Ouro, LT4<br/>
                      2955-280 Palmela, Portugal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-indigo-300" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">Email</h5>
                    <a href="mailto:towards.me.music@gmail.com" className="mt-1 text-slate-300 hover:text-white block transition-colors break-all">
                      towards.me.music@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-indigo-300" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">Telefone</h5>
                    <p className="mt-1 text-slate-300">+351 212 345 678</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="flex-grow relative min-h-[250px] rounded-xl overflow-hidden shadow-inner border border-white/10">
               <iframe 
                 width="100%" 
                 height="100%" 
                 title="Mapa de Localização - Noelle"
                 className="absolute inset-0 border-0 opacity-90 hover:opacity-100 transition-opacity"
                 loading="lazy" 
                 allowFullScreen
                 src="https://maps.google.com/maps?q=Parque%20Industrial%20Vale%20do%20Alecrim%2C%20Rua%20do%20Ouro%2C%20LT4%2C%20Pinhal%20Novo%2C%202955-280%20Palmela%2C%20Portugal&t=&z=15&ie=UTF8&iwloc=&output=embed"
               ></iframe>
               <a 
                 href="https://maps.google.com/maps?q=Parque%20Industrial%20Vale%20do%20Alecrim%2C%20Rua%20do%20Ouro%2C%20LT4%2C%20Pinhal%20Novo%2C%202955-280%20Palmela%2C%20Portugal"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="absolute bottom-3 right-3 bg-white text-slate-900 text-xs px-3 py-1.5 rounded-md font-bold shadow-md hover:bg-slate-100 flex items-center"
               >
                 Abrir GPS <ExternalLink className="ml-1 h-3 w-3" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;