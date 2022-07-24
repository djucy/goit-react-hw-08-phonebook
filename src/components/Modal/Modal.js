import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({children,onClose}) {
    


const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
    if (e.code === 'Escape') {
        onClose();
        console.log('keydown');
    }  };
    window.addEventListener('keydown', handleKeyDown)

  
    return () => {
   window.removeEventListener('keydown', handleKeyDown)

    }
  }, [onClose])
  
  


    return createPortal(
        <div className={style.background} onClick={handleBackdropClick}>
            <div className={style.container}>{children}
          
            </div>

        </div>,
        modalRoot

)
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children:PropTypes.object.isRequired


}