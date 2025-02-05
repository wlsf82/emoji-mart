export interface Emoji {
  id: string;
  symbol: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface CartItem {
  emoji: Emoji;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (emoji: Emoji) => void;
  removeFromCart: (emojiId: string) => void;
  updateQuantity: (emojiId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}