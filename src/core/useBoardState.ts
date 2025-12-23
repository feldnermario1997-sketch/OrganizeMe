import { useState, useEffect } from "react";

export type Item = {
  id: string;
  type: "text" | "node";
  data: {
    text?: string;
    x?: number;
    y?: number;
  };
};

export type Board = {
  id: string;
  title: string;
  items: Item[];
};

export function useBoardState(title: string) {
  const initialBoard: Board = {
    id: "default",
    title,
    items: [],
  };

  const [board, setBoard] = useState<Board>(() => {
    const saved = localStorage.getItem("board");
    return saved ? JSON.parse(saved) : initialBoard;
  });

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  const addItem = (item: Item) => {
    setBoard((b) => ({ ...b, items: [...b.items, item] }));
  };

  const updateItem = (updated: Item) => {
    setBoard((b) => ({
      ...b,
      items: b.items.map((i) => (i.id === updated.id ? updated : i)),
    }));
  };

  return { board, addItem, updateItem };
}
