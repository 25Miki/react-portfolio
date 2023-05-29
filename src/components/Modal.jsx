import './modal.css'
import { FaWindowClose } from 'react-icons/fa';

import React from 'react';

const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={closeModal}>
          <FaWindowClose/>
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
