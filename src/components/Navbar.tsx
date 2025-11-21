import { ShoppingCart, Droplet, Home, Store } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'shop' | 'bills') => void;
  currentPage: string;
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Navbar({ onNavigate, currentPage, cartItemsCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Chavi
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Home size={20} />
              <span>Inicio</span>
            </button>

            <button
              onClick={() => onNavigate('shop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'shop'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Store size={20} />
              <span>Tienda</span>
            </button>

            <button
              onClick={() => onNavigate('bills')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                currentPage === 'bills'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Droplet size={20} />
              <span>Recibos de Agua</span>
            </button>
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Home size={20} />
              <span>Inicio</span>
            </button>

            <button
              onClick={() => {
                onNavigate('shop');
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                currentPage === 'shop'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Store size={20} />
              <span>Tienda</span>
            </button>

            <button
              onClick={() => {
                onNavigate('bills');
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                currentPage === 'bills'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Droplet size={20} />
              <span>Recibos de Agua</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
