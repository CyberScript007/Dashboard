import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../hooks/useClickOutside";
import { useToggleContext } from "../context/ToggleSidebarContext";

const ModalContext = createContext();

function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");

  const close = () => setOpenModal("");
  const open = (modalName) => {
    setOpenModal(modalName);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        close,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

const Open = function ({ name, children, closeList }) {
  const { open } = useContext(ModalContext);

  const handleClick = () => {
    if (closeList) {
      closeList();
      open(name);
    } else {
      open(name);
    }
  };

  return cloneElement(children, { onClick: handleClick });
};

const Overlay = function ({ children }) {
  return (
    <div className="fixed left-0 top-0 z-[3000] flex h-screen w-full items-center justify-center py-5 backdrop-blur-md">
      {children}
    </div>
  );
};

const Window = function ({ children, name }) {
  const { openModal, close } = useContext(ModalContext);
  const ref = useClickOutside(close);
  const { theme } = useToggleContext();

  if (openModal !== name) return null;

  return createPortal(
    <>
      <Overlay>
        <div
          className={`rounded-md ${theme === "light" ? "bg-white" : "dark:bg-slate-800"} max-h-[90vh] overflow-y-auto p-6`}
          ref={ref}
        >
          <div>{cloneElement(children, { onCloseModal: close })}</div>
          {/* {children} */}
        </div>
      </Overlay>
    </>,
    document.body,
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
