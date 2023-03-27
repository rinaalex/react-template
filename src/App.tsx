import React from 'react';
import { Products } from '@products';
import './App.css';
import { Cart } from '@cart';

function App() {
  return (
    <div className="App">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
