import React from 'react';
import ReactDOM from 'react-dom'
const PortalModal = () => {
  return ReactDOM.createPortal(
    <h1>Portal Modal !</h1>, document.getElementById('portal-root')

  )

};

export default PortalModal;
