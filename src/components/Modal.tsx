import classes from "./Modal.module.css";

function Modal({ children }: any) {
  return (
    <div className={classes.body}>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
