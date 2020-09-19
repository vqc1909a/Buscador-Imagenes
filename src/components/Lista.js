import React, {Fragment} from 'react';
import Imagen from '../components/Imagen';
import PropTypes from 'prop-types';
const Lista = ({imagenes, busqueda}) => {
     let component
     if(imagenes.length === 0){
          component = 
                    <div className="lista py-2">
                         <div className="container">
                              <div className="row">
                                   <div className="col">
                                        <h3 className="font-weight-bolder">No se encontraron resultados con {busqueda}</h3>
                                   </div>
                              </div>
                         </div>
                    </div>
     }else{
          component =   <div className="lista py-2">
                              <div className="container">
                                   <h3 className="text-uppercase mb-3">{busqueda}</h3>
                                   <div className="row">
                                        {imagenes.map(imagen => <Imagen key={imagen.id} imagen={imagen}></Imagen>)}
                                   </div>
                              </div>
                         </div>
     }
     return (
          <Fragment>
               {component}
          </Fragment>
          
     );
}
Lista.propTypes = {
     imagenes: PropTypes.array.isRequired,
     busqueda: PropTypes.string.isRequired
}
export default Lista;