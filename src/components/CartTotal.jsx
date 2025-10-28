import React from 'react';

export default function CartTotal({ total }) {
    const totalFormateado = total ? `$${total.toLocaleString('es-CL')}` : '$0';

    return (
    <div id="total-carrito" style={{fontWeight: 'bold', margin: '12px 0'}}>
        Total: {totalFormateado}
    </div>
    );
}
