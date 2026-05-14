type BoardProps = {
  map?: string[][];
};

export const Board = ({ map }: BoardProps) => {
  const boardSize = 8;

  const renderSquare = (row: number, col: number) => {
    const isDark = (row + col) % 2 === 1;
    const piece = map?.[row]?.[col];

    return (
      <div
        key={`${row}-${col}`}
        style={{
          width: 100,
          height: 100,
          backgroundColor: isDark ? "#769656" : "#eeeed2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
        }}
      >
        {piece !== " " ? piece : null}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${boardSize}, 100px)`,
        width: "fit-content",
        border: "2px solid black",
      }}
    >
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) =>
          renderSquare(row, col)
        )
      )}
    </div>
  );
};