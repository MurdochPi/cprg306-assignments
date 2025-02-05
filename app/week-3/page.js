// page.js
import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-4xl font-extrabold text-center text-black mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
