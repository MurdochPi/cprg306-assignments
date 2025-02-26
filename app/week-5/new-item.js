'use client';
import React, { useState } from 'react';


const NewItem = () => {
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

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const item = { name, quantity, category };
  
      console.log(item);
  
      alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
  
      setName('');
      setQuantity(1);
      setCategory('produce');
    };

    return (
        <div>
          <h1>The Item in Question</h1>
    
          <div>
            <button 
              onClick={decrement} 
              disabled={quantity === 1}
            >
              -
            </button>
            
            <span>Quantity: {quantity}</span>
    
            <button 
              onClick={increment} 
              disabled={quantity === 20}
            >
              +
            </button>
          </div>
          <div>
            {/* Display the current category */}
            <p>Category: {category}</p>

            {/* Buttons or controls to change the category */}
            <div><button onClick={() => setCategory('produce')}>Produce</button></div>
            <div><button onClick={() => setCategory('dairy')}>Dairy</button></div>
            <div><button onClick={() => setCategory('meat')}>Meat</button></div>
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
                <option value="produce" style={{ color: 'black' }}>Produce</option>
                <option value="dairy" style={{ color: 'black' }}>Dairy</option>
                <option value="bakery" style={{ color: 'black' }}>Bakery</option>
                <option value="meat" style={{ color: 'black' }}>Meat</option>
                <option value="frozen" style={{ color: 'black' }}>Frozen Foods</option>
                <option value="canned" style={{ color: 'black' }}>Canned Goods</option>
                <option value="dry" style={{ color: 'black' }}>Dry Goods</option>
                <option value="beverages" style={{ color: 'black' }}>Beverages</option>
                <option value="snacks" style={{ color: 'black' }}>Snacks</option>
                <option value="household" style={{ color: 'black' }}>Household</option>
                <option value="other" style={{ color: 'black' }}>Other</option>
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