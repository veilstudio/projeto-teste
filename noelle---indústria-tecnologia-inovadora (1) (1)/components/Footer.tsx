import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-white text-lg font-bold mb-4">NOELLE</h3>
            <p className="text-sm text-slate-400">
              Indústria Tecnologia Inovadora, LDA.
              <br />
              Excelência em iluminação, eletrónica e química industrial.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Setores</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sectors" className="hover:text-white transition-colors">Iluminação</a></li>
              <li><a href="#sectors" className="hover:text-white transition-colors">Componentes</a></li>
              <li><a href="#sectors" className="hover:text-white transition-colors">Detergentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Livro de Reclamações</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Noelle - Indústria Tecnologia Inovadora, LDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;