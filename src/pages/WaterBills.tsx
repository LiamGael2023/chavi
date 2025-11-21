import { useState } from 'react';
import { Droplet, Search, CreditCard, Calendar, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';

export default function WaterBills() {
  const [accountNumber, setAccountNumber] = useState('');
  const [searchedBill, setSearchedBill] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Payment form state
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const mockBills: any = {
    '123456': {
      id: '1',
      accountNumber: '123456',
      clientName: 'Juan Pérez',
      address: 'Av. Principal #123, Ciudad',
      period: 'Noviembre 2025',
      consumption: 25,
      amount: 45.50,
      dueDate: '2025-12-05',
      status: 'pending'
    },
    '789012': {
      id: '2',
      accountNumber: '789012',
      clientName: 'María García',
      address: 'Calle Secundaria #456, Ciudad',
      period: 'Noviembre 2025',
      consumption: 18,
      amount: 32.75,
      dueDate: '2025-12-05',
      status: 'pending'
    }
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      const bill = mockBills[accountNumber];
      setSearchedBill(bill || null);
      setIsSearching(false);
      setShowPaymentForm(false);
      setPaymentSuccess(false);
    }, 1000);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      setSearchedBill(null);
      setAccountNumber('');
      setShowPaymentForm(false);
      setPaymentSuccess(false);
      setCardNumber('');
      setCardName('');
      setExpiryDate('');
      setCvv('');
    }, 3000);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-4">
            <Droplet className="text-white" size={40} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pago de <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Recibos de Agua</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Consulta y paga tu recibo de agua de forma rápida y segura
          </p>
        </div>

        {/* Search Section */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8 mb-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Search size={24} className="text-blue-400" />
            Consultar Recibo
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Ingresa tu número de cuenta"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="flex-1 px-4 py-3 glass-effect border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              onClick={handleSearch}
              disabled={!accountNumber || isSearching}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Buscando...
                </>
              ) : (
                <>
                  <Search size={20} />
                  Buscar
                </>
              )}
            </button>
          </div>

          {/* Example accounts */}
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Cuentas de ejemplo para probar:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setAccountNumber('123456')}
                className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 text-blue-400 rounded-lg transition-colors"
              >
                123456
              </button>
              <button
                onClick={() => setAccountNumber('789012')}
                className="text-sm px-3 py-1 bg-white/10 hover:bg-white/20 text-blue-400 rounded-lg transition-colors"
              >
                789012
              </button>
            </div>
          </div>
        </div>

        {/* Bill Details */}
        {searchedBill && !paymentSuccess && (
          <div className="glass-effect rounded-2xl p-6 sm:p-8 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-6">Detalles del Recibo</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">Cliente:</span>
                <span className="text-white font-semibold">{searchedBill.clientName}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">Dirección:</span>
                <span className="text-white font-semibold text-right">{searchedBill.address}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">Período:</span>
                <span className="text-white font-semibold">{searchedBill.period}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400">Consumo:</span>
                <span className="text-white font-semibold">{searchedBill.consumption} m³</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400 flex items-center gap-2">
                  <Calendar size={18} />
                  Fecha de vencimiento:
                </span>
                <span className="text-white font-semibold">{searchedBill.dueDate}</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg px-4 mt-4">
                <span className="text-white font-bold text-lg flex items-center gap-2">
                  <DollarSign size={24} />
                  Total a pagar:
                </span>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  ${searchedBill.amount.toFixed(2)}
                </span>
              </div>
            </div>

            {!showPaymentForm ? (
              <button
                onClick={() => setShowPaymentForm(true)}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <CreditCard size={20} />
                Proceder al Pago
              </button>
            ) : (
              <form onSubmit={handlePayment} className="space-y-4 animate-slide-up">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CreditCard size={24} className="text-blue-400" />
                  Información de Pago
                </h3>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Número de tarjeta</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength={19}
                    required
                    className="w-full px-4 py-3 glass-effect border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Nombre en la tarjeta</label>
                  <input
                    type="text"
                    placeholder="NOMBRE APELLIDO"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                    className="w-full px-4 py-3 glass-effect border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Fecha de expiración</label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      maxLength={5}
                      required
                      className="w-full px-4 py-3 glass-effect border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength={3}
                      required
                      className="w-full px-4 py-3 glass-effect border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowPaymentForm(false)}
                    className="flex-1 py-3 glass-effect hover:bg-white/10 text-white rounded-xl font-semibold transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95"
                  >
                    Pagar ${searchedBill.amount.toFixed(2)}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* No bill found */}
        {searchedBill === null && accountNumber && !isSearching && (
          <div className="glass-effect rounded-2xl p-8 text-center animate-fade-in">
            <AlertCircle className="mx-auto text-yellow-500 mb-4" size={64} />
            <h3 className="text-xl font-bold text-white mb-2">Recibo no encontrado</h3>
            <p className="text-gray-400">
              No se encontró un recibo con el número de cuenta: <span className="text-white font-semibold">{accountNumber}</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Verifica el número e intenta nuevamente
            </p>
          </div>
        )}

        {/* Payment Success */}
        {paymentSuccess && (
          <div className="glass-effect rounded-2xl p-8 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4 animate-bounce-slow">
              <CheckCircle className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">¡Pago Exitoso!</h3>
            <p className="text-gray-400 mb-4">
              Tu recibo de agua ha sido pagado correctamente
            </p>
            <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-semibold">
                Monto pagado: ${searchedBill.amount.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
