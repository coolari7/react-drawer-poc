import React from "react";
import { Backdrop } from "./Backdrop";
import { Button } from "./Button";
import { Drawer } from "./Drawer";
import { Panel } from "./Panel";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  return (
    <div className="m-2">
      <div className="float-right">
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      </div>

      <div
        style={{ width: "200px", height: "200px" }}
        className="ml-36 border-2 border-gray-300 relative"
      >
        <div className="float-right p-2">
          <Button onClick={() => setOpen2(true)}>Open</Button>
        </div>
        <Backdrop open={open2} onClose={() => setOpen2(false)} />
        <Panel open={open2}></Panel>
      </div>

      <Drawer open={open} timeout={250} onClose={() => setOpen(false)}>
        <h1 className="text-6xl font-bold text-gray-500">Content</h1>
        <Button onClick={() => setOpen(false)}>Close Drawer</Button>
      </Drawer>
    </div>
  );
}
