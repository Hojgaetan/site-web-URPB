import image_6412467b7ad30c500d7a5634c1808a5523c7b12c from 'figma:asset/6412467b7ad30c500d7a5634c1808a5523c7b12c.png';
import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import logoUrpb from 'figma:asset/8ad520ac209acbd94715f104b5e99368e44eeadf.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'village', label: 'Notre Village' },
    { id: 'projets', label: 'Nos Projets' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="cursor-pointer flex items-center gap-3"
            onClick={() => handleNavigate('accueil')}
          >
            <img src={image_6412467b7ad30c500d7a5634c1808a5523c7b12c} alt="Logo URPB" className="h-14 w-14 object-contain" />
            <div>
              <h1 className="text-xl text-[#16A34A]">URPB</h1>
              <p className="text-xs text-gray-600">Brindiago</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-[#16A34A] border-b-2 border-[#16A34A]'
                    : 'text-gray-600 hover:text-[#16A34A]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-[#F97316] text-white hover:bg-[#EA580C] rounded-full px-6"
              onClick={() => handleNavigate('soutenir')}
            >
              Nous Soutenir
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`text-left px-4 py-2 rounded-md transition-colors ${
                      currentPage === item.id
                        ? 'bg-green-50 text-[#16A34A]'
                        : 'text-gray-600 hover:text-[#16A34A] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-[#F97316] text-white hover:bg-[#EA580C] rounded-full mx-4 mt-4"
                  onClick={() => handleNavigate('soutenir')}
                >
                  Nous Soutenir
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}