export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WaterBill {
  id: string;
  accountNumber: string;
  clientName: string;
  address: string;
  period: string;
  consumption: number;
  amount: number;
  dueDate: string;
  status: 'pending' | 'paid';
}

export interface PaymentData {
  accountNumber: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}
