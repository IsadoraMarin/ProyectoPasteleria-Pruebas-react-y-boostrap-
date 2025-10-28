import React from 'react';

export default function Product({ name, price, onAdd }) {

    const precioFormateado = `$${price.toLocaleString('es-CL')}`;

    return (
    <div className="producto" style={{border: '1px solid #ddd', padding: '8px', margin: '8px'}}>
        <h4>{name}</h4>
        <div className="precio" style={{marginBottom: '8px'}}>{precioFormateado}</div>
        <button onClick={() => onAdd(price)}>Agregar al carrito</button>
    </div>
    );
}
