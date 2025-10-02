import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  logo: React.ReactNode;
}

export default function Navbar({ logo }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-black/80 backdrop-blur-md fixed w-full z-50 border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 mr-2">
                {logo}
              </div>
              <span className="text-amber-300 font-bold text-xl">Marconi工作室</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-amber-200 hover:text-amber-100 px-3 py-2 text-sm font-medium transition-colors">首页</Link>
            <a href="#services" className="text-amber-200 hover:text-amber-100 px-3 py-2 text-sm font-medium transition-colors">服务</a>
            <a href="#about" className="text-amber-200 hover:text-amber-100 px-3 py-2 text-sm font-medium transition-colors">关于我们</a>
            <a href="#contact" className="text-amber-200 hover:text-amber-100 px-3 py-2 text-sm font-medium transition-colors">联系我们</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-200 hover:text-white hover:bg-amber-900/30 focus:outline-none"
              aria-expanded="false"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-amber-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:text-white hover:bg-amber-900/30"
              onClick={toggleMenu}
            >
              首页
            </Link>
               <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:text-white hover:bg-amber-900/30"
              onClick={toggleMenu}
            >
              服务
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:text-white hover:bg-amber-900/30"
              onClick={toggleMenu}
            >
              关于我们
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-amber-200 hover:text-white hover:bg-amber-900/30"
              onClick={toggleMenu}
            >
              联系我们
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}