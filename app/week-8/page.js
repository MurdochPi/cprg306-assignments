"use client";

import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsdata from './item.json';

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    setItems(itemsdata);
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
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

export default Page;
