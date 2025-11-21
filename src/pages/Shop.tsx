import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface ShopProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function Shop({ products, onAddToCart }: ShopProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestra <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Tienda</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Descubre los mejores productos tecnológicos
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 animate-slide-up">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass-effect border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="text-gray-400 flex-shrink-0" size={20} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-xl">
              No se encontraron productos
            </div>
            <p className="text-gray-500 mt-2">
              Intenta con otros términos de búsqueda
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-gray-400">
          Mostrando {filteredProducts.length} de {products.length} productos
        </div>
      </div>
    </div>
  );
}
