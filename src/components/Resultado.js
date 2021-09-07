import React from 'react';

const Resultado = ({ total, rangePay, quantity }) => {
    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: $ {quantity}</p>
            <p>A pagar en: {rangePay} meses</p>
            <p>Su pago mensual es de: $ { (total / rangePay).toFixed(2) }</p>
            <p>Total a pagar: $ { (total).toFixed(2) }</p>
        </div>
    )
}

export default Resultado;