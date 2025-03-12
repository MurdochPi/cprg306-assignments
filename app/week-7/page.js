// page.js
"use client";

import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsdata from './item.json';

const Page = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsdata);
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 text-black">
      <h1 className="text-4xl font-extrabold text-center text-black mb-8">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;

