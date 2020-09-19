import React, {useState} from 'react';
import PropTypes from 'prop-types';
const Formulario = ({obtenerImagenesYTotal, changePageActual, changeBusqueda}) => {
     const [search, changeSearch]  = useState('');

     const handleSubmit = async (e) => {
          e.preventDefault();
          obtenerImagenesYTotal(search, 1);
          changeBusqueda(search);
          changePageActual(1);
          changeSearch('');
     }

     return (
               <div className="formulario py-3">
                    <div className="container">
                         <div className="row justify-content-center">
                              <div className="col-sm-8 col-md-6">
                                   <form className="form-inline form-inline-lg d-flex justify-content-center" onSubmit={handleSubmit}>
                                        <input value={search} type="text" className="form-control mb-2" placeholder="Ejem: Flores" onChange={(e) => changeSearch(e.target.value)}/>
                                        <button type="submit" className="btn btn-primary mb-2">Buscar</button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
     );
}
Formulario.propTypes = {
     obtenerImagenesYTotal: PropTypes.func.isRequired,
     changePageActual: PropTypes.func.isRequired,
     changeBusqueda: PropTypes.func.isRequired
}
export default Formulario;