import { useState } from "react";
import type { Item } from "../core/useBoardState";

type Props = { item: Item };

export default function TextItem({ item }: Props) {
  const [text, setText] = useState(item.data.text || "");

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{ width: "200px", height: "100px", margin: "10px" }}
    />
  );
}
