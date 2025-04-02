"use client";

import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import { useRouter } from 'next/navigation';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const router = useRouter();

  // Redirect to home if user is not logged in
  useEffect(() => {
    console.log('User:', user);  // Log user to debug
    if (!user) {
      router.push('/');  // Redirect if not logged in
    }
  }, [user, router]);

  // Function to load items for the current user
  const loadItems = async () => {
    if (user && user.uid) {
      try {
        const itemsData = await getItems(user.uid); // Get items for the current user
        setItems(itemsData); // Set state with the fetched items
      } catch (error) {
        console.error('Error loading items:', error);
      }
    }
  };

  // UseEffect hook to load items when the component mounts
  useEffect(() => {
    loadItems();  // Load the items when the component is mounted
  }, [user]); // Only rerun if `user` changes

  // Handle adding a new item
  const handleAddItem = async (newItem) => {
    if (user && user.uid) {
      try {
        // Add item to Firestore and get the document ID
        const newItemId = await addItem(user.uid, newItem);
        const addedItem = { ...newItem, id: newItemId }; // Add the ID to the item
        setItems((prevItems) => [...prevItems, addedItem]); // Update state with the new item
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = cleanItemName(item.name);
    setSelectedItemName(cleanedItemName);
  };

  const cleanItemName = (name) => {
    const emojiRemoved = name.replace(/[\p{Emoji}\u200B-\u200D\uFE0F\u2B50\u23F3\u2B06\u2935\u2B06\u267F]/gu, '');
    const cleanedName = emojiRemoved.split(',')[0].trim();
    return cleanedName;
  };

  if (!user) {
    return <div>Loading...</div>; // Show loading screen while checking user
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 text-black flex">
      <div className="flex flex-col w-1/2 mr-8">
        <h1 className="text-4xl font-extrabold text-center text-black mb-8">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default ShoppingListPage;
