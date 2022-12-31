import React, { ReactNode, useRef } from "react";
import ModalBack from "../button/ModalBack/ModalBack";
import ModalNext from "../button/ModalNext/ModalNext";
import ScrollToTop from "../button/scrollToTop/ScrollToTop";

import "./Modal.scss";

interface BackgroundI {
  onClick: () => void;
  children: ReactNode;
  BackgroundRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Background = ({ children, onClick, BackgroundRef }: BackgroundI) => (
  <div ref={BackgroundRef} className="background" onClick={onClick}>
    {children}
  </div>
);

interface ClickCapturerI {
  onClick: () => void;
  children: ReactNode;
  ScrollRef: React.MutableRefObject<HTMLDivElement | null>;
  BackgroundRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ClickCapturer = ({ onClick, children, ScrollRef, BackgroundRef }: ClickCapturerI) => (
  <div ref={ScrollRef} className="click_capturer" onClick={(e) => e.stopPropagation()}>
    <CloseButton onClick={onClick} />
    <ScrollToTop ScrollRef={ScrollRef} BackgroundRef={BackgroundRef} />
    <ModalNext />
    <ModalBack />
    {children}
  </div>
);

interface CloseButtonI {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonI) => (
  <button type="button" onClick={onClick} className="close_project"></button>
);

interface ModalI {
  children: ReactNode;
  close: () => void;
}

const Modal = ({ children, close }: ModalI) => {
  const ScrollRef = useRef(null);
  const BackgroundRef = useRef(null);

  return (
    <Background onClick={close} BackgroundRef={BackgroundRef}>
      <ClickCapturer onClick={close} ScrollRef={ScrollRef} BackgroundRef={BackgroundRef}>
        {children}
      </ClickCapturer>
    </Background>
  );
};

export default Modal;
