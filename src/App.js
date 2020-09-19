import React ,{Fragment} from 'react';
import Header from './components/Header';
import Imagenes from './components/Imagenes';
function App() {
  return (
    <Fragment>
      <Header title="Buscador de Imagenes"></Header>
      <main>
        <Imagenes></Imagenes>
      </main>
    </Fragment>
  );
}

export default App;
