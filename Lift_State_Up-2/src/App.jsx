
import  { useState } from 'react';
import './App.css'; 

// Child functional component

const Child = ({ cartItems, removeItem }) => {
  return (
    <div className="child">
      <label>Cart Items:</label>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span id="itemName">{item.name}</span>
            <span id="itemPrice">${item.price}</span>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Parent functional component
const Parent = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 15 },
    { name: 'Item 3', price: 20 },
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  const handleAddItem = () => {
    if (newItemName && newItemPrice) {
      const newItem = { name: newItemName, price: parseFloat(newItemPrice) };
      setCartItems([...cartItems, newItem]);
      setNewItemName('');
      setNewItemPrice('');
    }
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div className="parent">
      <label>Parent Component:</label>
      <div className="input-container">
        <label>Item Name:</label>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Item Price:</label>
        <input
          type="text"
          value={newItemPrice}
          onChange={(e) => setNewItemPrice(e.target.value)}
        />
      </div>
      <button onClick={handleAddItem}>Add Item</button>
      <Child cartItems={cartItems} removeItem={removeItem} />
    </div>
  );
};

export default Parent;
