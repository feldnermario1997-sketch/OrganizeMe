import { useState } from "react";
import type { Item } from "../core/useBoardState";

type Props = {
  item: Item;
  updateItem: (item: Item) => void;
};

export default function FlowNode({ item, updateItem }: Props) {
  const [dragging, setDragging] = useState(false);

  const x = item.data.x ?? 100;
  const y = item.data.y ?? 100;

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;

    updateItem({
      ...item,
      data: {
        ...item.data,
        x: x + e.movementX,
        y: y + e.movementY,
      },
    });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: "160px",
        minHeight: "100px",
        padding: "10px",
        borderRadius: "8px",
        background: "#cce5ff",
        border: "2px solid #333",
        cursor: "grab",
      }}
    >
      <textarea
        value={item.data.text ?? ""}
        onChange={(e) =>
          updateItem({
            ...item,
            data: { ...item.data, text: e.target.value },
          })
        }
        style={{
          width: "100%",
          height: "70px",
          border: "none",
          resize: "none",
          background: "transparent",
          outline: "none",
        }}
      />
    </div>
  );
}
