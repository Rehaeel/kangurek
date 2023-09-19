import { ModalProps } from "./types";
import { useEffect, useRef } from "react";

const Modal = (props: ModalProps) => {
  const { children, isOpen, setIsOpen } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const modal = dialogRef.current as HTMLDialogElement;
    const modalDimensions = modal.getBoundingClientRect();

    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      setIsOpen(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={onBackdropClick}
      id="dialog-modal"
      className="m-w-full fixed z-50 h-screen w-screen bg-gray-900/80"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <p
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 z-20 cursor-pointer rounded-lg bg-gray-700/50 py-2 px-4 text-2xl text-white"
        >
          X
        </p>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
