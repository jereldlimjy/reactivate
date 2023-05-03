import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState<string[]>(["a", "b", "c"]);

  const handleChangeCell = (newValue: string, id: number) => {
    if (newValue.length > 1) return;

    setCells((prevCells) =>
      prevCells.map((val, currId) => (currId === id ? newValue : val))
    );
  };

  const handleAddCell = (id: number) => {
    setCells([...cells.slice(0, id), "", ...cells.slice(id)]);
  };

  const handleDeleteCell = (id: number) => {
    if (cells.length === 1) return;

    const cellsCopy = [...cells];
    cellsCopy.splice(id, 1);
    setCells(cellsCopy);
  };

  const combinedString = cells.join("");

  return (
    <main>
      <section className="cells">
        {cells.map((cell, id) => (
          <div key={id} className="cell">
            <input
              value={cell}
              onChange={(e) => handleChangeCell(e.target.value, id)}
            ></input>
            <span className="add" onClick={() => handleAddCell(id + 1)}></span>
            <span className="delete" onClick={() => handleDeleteCell(id)}>
              x
            </span>
          </div>
        ))}

        <span className="combinedString">
          <strong>{combinedString}</strong>
        </span>
      </section>
    </main>
  );
}

export default App;
