import React, {useState, useEffect} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Botones from '../components/Botones';
import Spinner from '../components/Spinner';
import axios from "axios";

const Imagenes = () => {
     const [imagenes, changeImagenes] = useState([]);
     const [busqueda, changeBusqueda] = useState('');
     const [totalimagenes, changeTotalImagenes] = useState(0);
     const [pageactual, changePageActual] = useState(1);
     const [arraypages, changeArrayPages] = useState([]);
     const [spinner, changeSpinner] = useState(false);
     
     const imagenespage = 12  ;
     
     useEffect(() => {
          (async () => {
               obtenerImagenesYTotal(busqueda, pageactual);
                 const imagenes = document.querySelector('.imagenes');
                 //!Con el behavior funciona xvre cuando recargas la pagina y se dirige ahi pero con los botones se para en el camino
               //    imagenes.scrollIntoView({behavior: 'smooth'});
               // !Con el true funciona xvre cuando haces click en los botones pero cuando recargas la pagina se ve un poco feo cuando se dirige directamente a es tag
                  imagenes.scrollIntoView(true);

          })();
          // eslint-disable-next-line
     }, [pageactual])
     

     useEffect(()=>{
               const array = [];
               for (let i = 1; i <=  Math.ceil(totalimagenes / imagenespage); i++) {
                    array.push(i);
               }
               changeArrayPages([...array]);
          // eslint-disable-next-line
     }, [totalimagenes]);


     const obtenerImagenesYTotal = async (busqueda, pageactual) => {
          changeSpinner(true);
           const {data} = await axios.get(`https://pixabay.com/api/?key=18355214-36a0c2880c4e39fc9a6698d8c&q=${busqueda}&per_page=${imagenespage}&page=${pageactual}&lang=es`);
            changeImagenes([...data.hits]);
            changeTotalImagenes(data.totalHits);
            changeSpinner(false);
     }


     return (
          <section className="imagenes py-3">
               <Formulario obtenerImagenesYTotal={obtenerImagenesYTotal} changePageActual={changePageActual} changeBusqueda={changeBusqueda}></Formulario>
               {!spinner
               ?
               <Lista imagenes={imagenes} busqueda={busqueda} ></Lista>
               :
               <Spinner></Spinner>
               }
               <Botones arraypages={arraypages} pageactual={pageactual} changePageActual={changePageActual} busqueda={busqueda}></Botones>
          </section>
     );
}
 
export default Imagenes;