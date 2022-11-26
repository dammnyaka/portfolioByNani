import { ReactNode, useRef } from "react";
import ModalLeft from "../button/ModalLeft/ModalLeft";
import ModalRight from "../button/ModalRight/ModalRight";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import "./Modal.scss";

interface BackgroundI {
  onClick: () => void;
  children: ReactNode;
  BackgroundRef: any;
}

const Background = ({ children, onClick, BackgroundRef }: BackgroundI) => (
  <div ref={BackgroundRef} className="background" onClick={onClick}>
    {children}
  </div>
);

const ClickCapturer = ({ onClick, children, ScrollRef, BackgroundRef }: any) => (
  <div ref={ScrollRef} className="click-capturer" onClick={(e) => e.stopPropagation()}>
    <CloseButton onClick={onClick} />
    <ScrollToTop ScrollRef={ScrollRef} BackgroundRef={BackgroundRef} />
    <ModalRight />
    <ModalLeft />
    {children}
  </div>
);

const CloseButton = ({ onClick }: any) => <button type="button" onClick={onClick} className="CloseProject"></button>;

interface ModalI {
  children: ReactNode;
  close: () => void;
}

const Modal = ({ children, close }: ModalI) => {
  const ScrollRef = useRef();
  const BackgroundRef = useRef();

  return (
    <Background onClick={close} BackgroundRef={BackgroundRef}>
      <ClickCapturer onClick={close} ScrollRef={ScrollRef} BackgroundRef={BackgroundRef}>
        {children}
      </ClickCapturer>
    </Background>
  );
};

export default Modal;
