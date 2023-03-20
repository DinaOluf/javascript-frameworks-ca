import { create } from 'zustand';

const useCartStore = create((set) => ({
  products: [],
  cart: [],
  isLoading: false,
  hasErrors: false,
  addProductToCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
  clearCart: () => set({ cart: [] }),
  fetchProducts: async (url) => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      set((state) => ({ products: (state.products = json), isLoading: false }));
    } catch (error) {
      set(() => ({ hasErrors: true, isLoading: false }));
    }
  },
}));

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const products = useCartStore((state) => state.products);
  const fetchProducts = useCartStore((state) => state.fetchProducts);
  const isLoading = useCartStore((state) => state.isLoading);
  const hasErrors = useCartStore((state) => state.hasErrors);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  function addToCart(id) {
    console.log('Add to cart', id);
    addProductToCart(id);
  }

  return {
    products,
    cart,
    isLoading,
    hasErrors,
    addToCart,
    clearCart,
    fetchProducts,
  };
}

export { useCart };