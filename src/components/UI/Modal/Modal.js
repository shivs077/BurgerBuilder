import classes from "./Modal.module.css";
import Backdrop from "components/UI/Backdrop/Backdrop";

const Modal = ({ show, modalClosed, children }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
