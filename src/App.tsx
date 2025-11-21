import { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import WaterBills from './pages/WaterBills';
import { products } from './data/products';
import { Product, CartItem } from './types';

type Page = 'home' | 'shop' | 'bills';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If item already in cart, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
            : item
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Show cart briefly to give feedback
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 2000);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Navbar
        onNavigate={handleNavigate}
        currentPage={currentPage}
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'shop' && <Shop products={products} onAddToCart={handleAddToCart} />}
        {currentPage === 'bills' && <WaterBills />}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 Chavi. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Plataforma moderna para compras y pagos de servicios
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
