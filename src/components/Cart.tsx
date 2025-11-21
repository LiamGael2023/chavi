import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 glass-effect border-l border-white/10 z-50 animate-slide-up flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Carrito</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="text-gray-400 hover:text-white" size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto text-gray-600 mb-4" size={64} />
              <p className="text-gray-400 text-lg">Tu carrito está vacío</p>
              <p className="text-gray-500 text-sm mt-2">Agrega productos para comenzar</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="glass-effect rounded-xl p-4 hover:bg-white/10 transition-all"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                      <p className="text-blue-400 font-bold">${item.price.toFixed(2)}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-1 bg-white/10 hover:bg-white/20 rounded transition-colors"
                        >
                          <Minus size={14} className="text-white" />
                        </button>

                        <span className="text-white font-semibold px-3">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                          className="p-1 bg-white/10 hover:bg-white/20 rounded transition-colors"
                        >
                          <Plus size={14} className="text-white" />
                        </button>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-auto p-1 bg-red-500/20 hover:bg-red-500/30 rounded transition-colors"
                        >
                          <Trash2 size={14} className="text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 text-right">
                    <span className="text-gray-400 text-sm">Subtotal: </span>
                    <span className="text-white font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-300">Total:</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95">
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </>
  );
}
