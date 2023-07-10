import React, { useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  content: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    left: 'auto',
    top: 'auto',
    margin: '0',
    backgroundColor: '#fff',
    border: 'none',
    padding: '20px',
    boxShadow: 'none',
    maxWidth: '400px',
  },
};

const Popup = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);


  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="flex gap-4">
        <button onClick={onClose} className="text-main">
          X
        </button>
        <div>{message}</div>
      </div>
    </Modal>
  );
};

export default Popup;
