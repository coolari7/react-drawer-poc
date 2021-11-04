import React from "react";
import { Portal } from "./Portal";
import { Backdrop } from "./Backdrop";
import { Panel } from "./Panel";

export function Drawer({
  onClose,
  children,
  open = false,
  timeout = 500,
  showBackdrop = true,
}) {
  return (
    <Portal>
      <Backdrop
        open={open}
        showBackdrop={showBackdrop}
        timeout={timeout}
        onClose={onClose}
      />
      <Panel open={open} timeout={timeout}>
        {children}
      </Panel>
    </Portal>
  );
}
