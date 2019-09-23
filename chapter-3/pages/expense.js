import React from 'react';

export default function Expense() {
  const fieldStyle = {
    margin: 4,
    maxWidth: 250,
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div>
      <h1>New Expense</h1>
      <div style={fieldStyle}>
        <label for="category">Category:</label>
        <select id="category">
          <option>Food</option>
          <option>Clothing</option>
          <option>Groceries</option>
          <option>Electronics</option>
        </select>
      </div>
      <div style={fieldStyle}>
        <label for="merchant">Merchant:</label>
        <select id="merchant">
          <option>Canteens & Shoe</option>
          <option>Clothing Wire</option>
        </select>
      </div>
      <div style={fieldStyle}>
        <label for="location">Location:</label>
        <select id="location">
          <option>Downtown</option>
          <option>East York</option>
          <option>Scarborough</option>
        </select>
      </div>
      <div style={fieldStyle}>
        <label for="amount">Amount:</label>
        <input id="amount" />
      </div>
      <button>Save Expense</button>
    </div>
  );
}
