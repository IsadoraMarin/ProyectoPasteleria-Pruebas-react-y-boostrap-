import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import CartTotal from './components/CartTotal';
import Checkout from './components/Checkout';
import SignupForm from './components/SignupForm';

function App() {
  const [total, setTotal] = useState(0);

  function agregarAlCarrito(precioProducto) {
    setTotal((prev) => prev + precioProducto);
  }

  const productos = [
    { id: 1, name: 'Producto A', price: 12500 },
    { id: 2, name: 'Producto B', price: 49990 },
    { id: 3, name: 'Producto C', price: 7990 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tienda de ejemplo</h2>
        <CartTotal total={total} />

        <div style={{display: 'flex', gap: '12px'}}>
          {productos.map((p) => (
            <Product key={p.id} name={p.name} price={p.price} onAdd={agregarAlCarrito} />
          ))}
        </div>

        <Checkout total={total} />
        <SignupForm />
      </header>
    </div>
  );
}

export default App;
