'use client';
import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('produce');

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: generateRandomId(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div>
      <h1>The Item in Question</h1>

      <div>
        <button onClick={decrement} disabled={quantity === 1}>
          -
        </button>

        <span>Quantity: {quantity}</span>

        <button onClick={increment} disabled={quantity === 20}>
          +
        </button>
      </div>

      <div>
        {/* Display the current category */}
        <p>Category: {category}</p>

        {/* Buttons or controls to change the category */}
        <div>
          <button onClick={() => setCategory('produce')}>Produce</button>
        </div>
        <div>
          <button onClick={() => setCategory('dairy')}>Dairy</button>
        </div>
        <div>
          <button onClick={() => setCategory('meat')}>Meat</button>
        </div>
      </div>

      <div>
        {/* Form to handle item creation */}
        <form onSubmit={handleSubmit}>
          {/* Name field */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter item name"
              required
              style={{ color: 'black' }}
            />
          </div>

          {/* Category field */}
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ color: 'black' }}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit button */}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
