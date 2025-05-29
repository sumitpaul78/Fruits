import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];  // Load cart from localStorage


// Calculate Total cart price
const calculateTotals = (cart) => {
  return cart.reduce(
    (acc, item) => {
      const itemTotal = item.product_price * item.quantity;
      acc.totalPrice += itemTotal;
      acc.totalQuantity += item.quantity;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );
};

const updateCartState = (state) => {
  const totals = calculateTotals(state.cart);
  state.totalPrice = totals.totalPrice;
  state.totalQuantity = totals.totalQuantity;
  localStorage.setItem("cart", JSON.stringify(state.cart));
};

const initialState = {
    cart: storedCart,
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
//pp

            addItemToCart: (state, action) => {
                const { id, quantity } = action.payload; // Get product id and quantity

                // Find if the item is already in the cart
                const find = state.cart.findIndex((item) => item.id === id);

                if (find >= 0) {
                    // If the item is in the cart, update its quantity
                   
                    state.cart[find].quantity += quantity;
                   
                } else {
                    // If the item is not in the cart, add it with the specified quantity
                    state.cart.push({ ...action.payload, quantity });
                }

                // Store the updated cart in localStorage for persistence
                localStorage.setItem("cart", JSON.stringify(state.cart));
            },


      addToCart: (state, action) => {
      const item = action.payload;
      const index = state.cart.findIndex((x) => x.product_id === item.product_id);
      if (index >= 0) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
      updateCartState(state);
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.product_id !== action.payload);
      updateCartState(state);
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.product_id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      updateCartState(state);
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.product_id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
      updateCartState(state);
    },

    clearCart: (state) => {
      state.cart = [];
      updateCartState(state);
      localStorage.removeItem("cart");
    },
    getCartTotal: (state) => {
  const parsePrice = (val) =>
    typeof val === "number" ? val :
    typeof val === "string" ? parseFloat(val.replace(/[^0-9.-]+/g, "")) : 0;

  let { totalQuantity, totalPrice } = state.cart.reduce(
    (cartTotal, item) => {
      const price = parsePrice(item.discount_price);
      const itemTotal = price * item.quantity;

      cartTotal.totalPrice += itemTotal;
      cartTotal.totalQuantity += item.quantity;
      return cartTotal;
    },
    {
      totalPrice: 0,
      totalQuantity: 0,
    }
  );

  state.totalPrice = totalPrice;
  state.totalQuantity = totalQuantity;
},

      resetCart: (state) => {
      state.cart = [];
      updateCartState(state);
      localStorage.removeItem("cart");
        
    },
    },
});

export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart, addItemToCart,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
