import React, { useState } from 'react';

export default function Checkout({ total }) {
    const [nombre, setNombre] = useState('');

    function handleComprar() {
    const nombreCliente = nombre;
    if (total > 0 && nombreCliente.trim() !== '') {
        window.location.href = 'seguimiento.html';
    } else {
        alert('El carrito está vacío o faltan datos.');
    }
    }

    return (
    <div style={{marginTop: '16px'}}>
        <label htmlFor="nombre-cliente">Nombre del cliente:</label>
        <input
        id="nombre-cliente"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{marginLeft: '8px'}}
        />
        <button onClick={handleComprar} style={{marginLeft: '12px'}}>
        Comprar
        </button>
    </div>
    );
}
