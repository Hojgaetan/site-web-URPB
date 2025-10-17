import { Facebook, Twitter, Instagram } from 'lucide-react';
import logoUrpb from 'figma:asset/8ad520ac209acbd94715f104b5e99368e44eeadf.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center gap-3">
            <img src={logoUrpb} alt="Logo URPB" className="h-16 w-16 object-contain" />
            <div>
              <h3 className="text-xl mb-1">URPB</h3>
              <p className="text-green-100 text-sm">
                Union pour la Rénovation et la Promotion de Brindiago
              </p>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <Facebook className="h-5 w-5" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <Twitter className="h-5 w-5" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <Instagram className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-green-100">
            © 2025 URPB. Tous droits réservés. Construisons ensemble l'avenir de Brindiago.
          </p>
        </div>
      </div>
    </footer>
  );
}