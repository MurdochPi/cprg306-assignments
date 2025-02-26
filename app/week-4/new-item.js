'use client';
import React, { useState } from 'react';


const NewItem = () => {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div>
          <h1>New Item</h1>
    
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
        </div>
    );
};

  export default NewItem;