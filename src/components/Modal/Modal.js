import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import style from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({children,onClose}) {
    
const handleKeyDown = e => {
    if (e.code === 'Escape') {
        onClose();
        console.log('keydown');
    }
  };
const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  window.addEventListener('keydown',handleKeyDown)
  
  //     useEffect(() => {
//   window.addEventListener('keydown',handleKeyDown)

//   return () => {
//       window.removeEventListener('keydown',
//       handleKeyDown)
//   }
// }, [handleKeyDown])


    return createPortal(
        <div className={style.background} onClick={handleBackdropClick}>
            <div className={style.container}>{children}
                <h1>Helloo</h1>
            </div>

        </div>,
        modalRoot


)


}