// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import React, { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {
  const data = require("./components/data.json");
  const [productoAniadido, setProductoAniadido] = useState(0);
  const aniadirProducto = () =>{
    setProductoAniadido(productoAniadido + 1);
  }

  return (
    <div className="App">
      <Cabecera cantProductos={productoAniadido}/>
      <Listado array={data} />
    </div>
  );
}

export default App;
