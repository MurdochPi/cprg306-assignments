// shopping-list-service.js
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Get items function
export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, 'users', userId, 'items');
    const querySnapshot = await getDocs(itemsRef);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error('Error getting items:', error);
    throw new Error('Error retrieving items');
  }
};

// Add item function
export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, 'users', userId, 'items');
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error('Error adding item:', error);
    throw new Error('Error adding item');
  }
};
