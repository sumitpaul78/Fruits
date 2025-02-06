import { createSlice } from "@reduxjs/toolkit";
import Data from "../Component/db/relatedProduct.json";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];  // Load cart from localStorage

const initialState = {
    cart: storedCart,
    items: Data.products,
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
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
            // Store updated cart in localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            // Store updated cart in localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        increaseItemQuantity: (state, action) => {
            const updatedCart = state.cart.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            state.cart = updatedCart;
            // Store updated cart in localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        decreaseItemQuantity: (state, action) => {
            const updatedCart = state.cart.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
                }
                return item;
            });
            state.cart = updatedCart;
            // Store updated cart in localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { discountprice, quantity } = cartItem;
                    const itemTotal = discountprice * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.removeItem("cart");  // Remove cart data from localStorage
        },
    },
});

export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
