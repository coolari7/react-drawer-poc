import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Panel.css";

export function Panel({ children, timeout = 500, open = false }) {
  return (
    <CSSTransition in={open} unmountOnExit timeout={timeout} classNames="panel">
      <div className="full-screen w-2/3 lg:w-1/3 bg-white">{children}</div>
    </CSSTransition>
  );
}
