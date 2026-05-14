// TODO: Mark github projects under CC BY-SA 3.0 license. Credit to: Cburnett (from wikipedia) for pieces.
import { RenderSquare } from "./Tile";

type BoardProps = {
  map: string[][];
};

export const Board = ({map}:BoardProps) => {
  const boardSize = 8;


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
          RenderSquare(row, col,map[row][col])
        )
      )}
    </div>
  );
};