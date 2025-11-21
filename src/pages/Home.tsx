import { Store, Droplet, CreditCard, TrendingUp, Shield, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'shop' | 'bills') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Bienvenido a Chavi
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Tu plataforma todo-en-uno para compras online y pagos de servicios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => onNavigate('shop')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 justify-center"
              >
                <Store size={24} />
                Explorar Tienda
                <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('bills')}
                className="group px-8 py-4 glass-effect hover:bg-white/10 text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 justify-center"
              >
                <Droplet size={24} />
                Pagar Recibos
                <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            ¿Por qué elegir Chavi?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Store className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Tienda Virtual</h3>
              <p className="text-gray-400">
                Amplio catálogo de productos tecnológicos de última generación con los mejores precios del mercado.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Droplet className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pago de Recibos</h3>
              <p className="text-gray-400">
                Paga tus recibos de agua de forma rápida y segura desde la comodidad de tu hogar.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">100% Seguro</h3>
              <p className="text-gray-400">
                Todas tus transacciones están protegidas con tecnología de encriptación de última generación.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Procesamiento Rápido</h3>
              <p className="text-gray-400">
                Procesos optimizados para que completes tus compras y pagos en segundos.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Múltiples Métodos de Pago</h3>
              <p className="text-gray-400">
                Acepta tarjetas de crédito, débito y transferencias bancarias.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Ofertas Exclusivas</h3>
              <p className="text-gray-400">
                Accede a promociones y descuentos especiales para nuestros usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a miles de usuarios que ya disfrutan de nuestros servicios
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95"
          >
            Comenzar Ahora
          </button>
        </div>
      </section>
    </div>
  );
}
