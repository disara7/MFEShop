import React from 'react';
import ProductList from './components/ProductList.js';

export default function App() {
  return (
    <div className="mfe-root">
      <header>
        <h1>Product MFE (React)</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}
