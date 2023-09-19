import ReactDOM from "react-dom";
import { ModalProps } from "./types";

const Modal = (props: ModalProps) => {
  const { children, isOpen, setIsOpen } = props;
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-gray-900/80">
      <div className="relative flex h-full w-full items-center justify-center">
        <p
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 z-20 cursor-pointer rounded-lg bg-gray-700/50 py-2 px-4 text-2xl text-white"
        >
          X
        </p>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
