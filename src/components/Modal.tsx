import classes from "./Modal.module.css";

function Modal({ children, onClose }: any) {
  return (
    <div className={classes.body}>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
