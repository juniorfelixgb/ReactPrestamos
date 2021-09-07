import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {
  const [quantity, saveQuantity] = useState(0);
  const [rangePay, saveRangePay] = useState('');
  const [total, saveTotal] = useState(0);
  const [loading, saveLoading] = useState(false);

  let component;
  if (loading) {
    component = <Spinner />;
  } else if (total === 0) {
    component = <Mensaje />;
  } else {
    component = <Resultado 
                  total={total} 
                  rangePay={rangePay} 
                  quantity={quantity} />;
  }

  return (
    <>
      <Header
        title="Cotizador de Prestamos" />
      <div className="container">
        <Formulario 
         quantity={quantity}
         saveQuantity={saveQuantity}
         rangePay={rangePay}
         saveRangePay={saveRangePay}
         total={total}
         saveTotal={saveTotal}
         saveLoading={saveLoading} />
         <div className="mensajes">
            {component}
         </div>
      </div>
    </>
  );
}

export default App;
