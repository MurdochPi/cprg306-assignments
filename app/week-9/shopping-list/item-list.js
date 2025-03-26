"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          style={{ backgroundColor: sortBy === 'name' ? 'darkgreen' : 'lightgreen' }}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          style={{ backgroundColor: sortBy === 'category' ? 'darkgreen' : 'lightgreen' }}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>     
      <div>
        {sortedItems.map((item) => (
          <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
