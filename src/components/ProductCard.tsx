import { ShoppingCart, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden hover-lift group">
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Package size={14} />
            {product.stock} disponibles
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
          >
            <ShoppingCart size={18} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
