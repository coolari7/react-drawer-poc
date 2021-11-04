import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Backdrop.css";

export function Backdrop({
  onClose,
  timeout = 500,
  showBackdrop = true,
  open = false,
}) {
  return (
    <CSSTransition
      in={open}
      unmountOnExit
      timeout={timeout}
      classNames="backdrop"
    >
      <div
        onClick={onClose}
        className={`full-screen${
          showBackdrop ? " bg-gray-500 bg-opacity-50" : ""
        }`}
      ></div>
    </CSSTransition>
  );
}
