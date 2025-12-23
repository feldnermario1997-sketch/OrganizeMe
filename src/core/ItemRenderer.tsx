import type { Item } from "./useBoardState";
import FlowNode from "../items/FlowNode";

type Props = {
  item: Item;
  updateItem: (item: Item) => void;
};

export default function ItemRenderer({ item, updateItem }: Props) {
  if (item.type === "node") {
    return <FlowNode item={item} updateItem={updateItem} />;
  }

  // Text-Notiz
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        background: "#f9f9f9",
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
          height: "80px",
          border: "none",
          resize: "none",
        }}
      />
    </div>
  );
}
