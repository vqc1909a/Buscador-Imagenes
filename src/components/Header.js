import React from 'react';
import PropTypes from 'prop-types';
const Header = ({title}) => {
     return (
          <header className="header bg-primary py-4">
               <div className="container">
                    <div className="row">
                         <div className="col">
                              <h1 className="text-center text-white display-4">{title}</h1>
                         </div>
                    </div>
               </div>

          </header>
     );
}
Header.propTypes = {
     title: PropTypes.string.isRequired
}
 
export default Header;