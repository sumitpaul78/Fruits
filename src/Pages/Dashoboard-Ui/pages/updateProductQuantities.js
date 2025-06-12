// firebase/updateProductQuantities.js
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { fireDB } from "../../../firebase/FirebaseConfig";

/**
 * Decrease product quantity in Firestore after purchase
 * @param {Array} cartItems - Items from the order (must include productId & quantity)
 */
export const updateProductQuantities = async (cartItems) => {
  try {
    for (const item of cartItems) {
      const productRef = doc(fireDB, "products", item.productId); // productId must be document ID
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        const currentData = productSnap.data();
        const currentQty = currentData.quantity || 0;
        const orderedQty = item.quantity;

        const updatedQty = currentQty - orderedQty;

        await updateDoc(productRef, {
          quantity: updatedQty >= 0 ? updatedQty : 0 // prevent negative stock
        });

        console.log(`Updated quantity for ${item.product_name}: ${currentQty} → ${updatedQty}`);
      }
    }
  } catch (error) {
    console.error("Error updating product quantities:", error);
  }
};
