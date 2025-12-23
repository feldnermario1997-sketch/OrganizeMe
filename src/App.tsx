import { useBoardState } from "./core/useBoardState";
import ItemRenderer from "./core/ItemRenderer";

export default function App() {
  const { board, addItem, updateItem } = useBoardState("Mein erstes Board");

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <h1 style={{ padding: "10px" }}>{board.title}</h1>

      <div style={{ padding: "10px" }}>
        <button
          onClick={() =>
            addItem({
              id: Date.now().toString(),
              type: "node",
              data: { text: "Flow Node", x: 100, y: 100 },
            })
          }
        >
          ➕ Neue Box
        </button>
      </div>

      {board.items.map((item) => (
        <ItemRenderer
          key={item.id}
          item={item}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
}
