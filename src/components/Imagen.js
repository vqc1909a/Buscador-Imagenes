import React from 'react';
import PropTypes from 'prop-types';
const Image = ({imagen}) => {
     const { webformatURL ,largeImageURL, likes, views, tags} = imagen;
     return (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
               <div className="card">
                    <img src={webformatURL} alt={tags} className="card-img-top" />
                    <div className="card-body text-primary">
                         <p className=""><span className="font-weight-bold">{likes}</span> Me Gusta</p>
                         <p className=""><span className="font-weight-bold">{views}</span>  Vistas</p>
                    </div>
                    <div className="card-header text-center">
                         <a className="btn btn-primary btn-sm btn-block" href={largeImageURL} target="_blank" rel="noopener noreferrer">Ver imagen</a>
                    </div>
               </div>
          </div>         
     );
}
Image.propTypes = {
     imagen: PropTypes.object.isRequired
}
export default Image;