import React, { useState } from "react";
import { getTotal } from '../helpers';

const Formulario = (props) => {
  const { quantity, saveQuantity, rangePay, saveRangePay, total, saveTotal, saveLoading } = props;
  const [error, saveError] = useState(false);

  const calcPrest = e => {
    e.preventDefault();
    if (quantity === 0 || rangePay === '') {
        saveError(true);
        return;
    }
    saveError(false);
    saveLoading(true);
    setTimeout(() => {
      const total = getTotal(quantity, rangePay);
      saveTotal(total);
      saveLoading(false);
    }, 3000);
  }
  return (
    <>
      <form onSubmit={calcPrest}>
        <div className="row">
          <div className="col">
            <div>
              <label>Cantidad Prestamo</label>
              <input
                className="u-full-width"
                type="number"
                placeholder="Ejemplo: 3000"
                onChange={e => saveQuantity(parseInt(e.target.value))}
              />
            </div>
            <div>
              <label>Plazo para Pagar</label>
              <select 
                className="u-full-width" 
                onChange={e => saveRangePay(parseInt(e.target.value))}>
                <option value="">Seleccionar</option>
                <option value="3">3 meses</option>
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
              </select>
            </div>
            <div>
              <input
                type="submit"
                value="Calcular"
                className="button-primary u-full-width"
              />
            </div>
          </div>
        </div>
      </form>
      { (error) ? 
            <p className="error">
                Todos los campos son obligatorios
            </p> 
      : null }
    </>
  );
};

export default Formulario;
