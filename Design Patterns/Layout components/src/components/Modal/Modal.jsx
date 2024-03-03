/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  margin: 15% auto;
  padding: 20px;
  background-color: wheat;
  width: 50%;
`;

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <button onClick={() => setShow(true)}>Show modal</button>
      {show &&
        ReactDOM.createPortal(
          <ModalBackdrop onClick={closeModal}>
            <ModalContent onClick={(event) => event.stopPropagation()}>
              <button onClick={closeModal}>Close modal</button>
              {children}
            </ModalContent>
          </ModalBackdrop>,
          document.body
        )}
    </>
  );
};

export default Modal;
