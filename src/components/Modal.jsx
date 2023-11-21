import "./Modal.css";

function Modal({ children, shown, close, pathname }) {
  return shown ? (
    <div
      className={`${pathname ? "modal-backdrop-pathname" : "modal-backdrop"}`}
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className={`${pathname ? "modal-content-pathname" : "modal-content"}`}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
}

export default Modal;
