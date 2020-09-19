import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Botones = ({arraypages, pageactual, changePageActual, busqueda}) => {
     const [newarraypages, changeNewArrayPages] = useState([]);

     useEffect(()=>{
          changeNewArrayPages(arraypages.slice(0,10))
          // eslint-disable-next-line
     },[arraypages, busqueda])
     
     useEffect(() => {
           if (pageactual % 10 === 0) {
                changeNewArrayPages(arraypages.slice(pageactual - 10, pageactual));
           }else if(pageactual.toString().slice(-1) === '1') {
               changeNewArrayPages(arraypages.slice(pageactual - 1, pageactual + 9));
          }    
          // eslint-disable-next-line  
     }, [pageactual]);


     if (arraypages.length === 0) return null;

     return (
          <div className="botones">
               <div className="container">
                    <div className="row">
                         <div className="col d-flex justify-content-center">
                              <div className="btn-group btn-group-sm">
                                   {pageactual === 1
                                   ?
                                   <button type="submit" className="btn btn-primary" disabled><i className="fas fa-arrow-left"></i></button>
                                   :
                                   <button type="submit" className="btn btn-primary" onClick={() => changePageActual(pageactual - 1)}><i className="fas fa-arrow-left"></i></button>
                                   }
                                  
                                   {newarraypages.map((pag, i) => <button type="submit" className={`btn btn-primary ${pag === pageactual ? 'active' : null}`} key={i} onClick={()=> changePageActual(pag)}>{pag}</button>)}
                                      

                                   {pageactual=== arraypages.length
                                   ?
                                   <button type="submit" className="btn btn-primary" disabled><i className="fas fa-arrow-right"></i></button>
                                   :
                                   <button type="submit" className="btn btn-primary" onClick={() => changePageActual(pageactual + 1)}><i className="fas fa-arrow-right"></i></button>
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

Botones.propTypes = {
     arraypages: PropTypes.array.isRequired,
     pageactual: PropTypes.number.isRequired,
     changePageActual: PropTypes.func.isRequired,
     busqueda: PropTypes.string.isRequired
}
export default Botones;