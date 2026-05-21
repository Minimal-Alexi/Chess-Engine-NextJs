"use client";

import { ActiveChessContext, ActiveChessProvider } from "@/context/activeChessContext";
import {Game} from "@/types/game"
import { RenderSquareInteractive } from "./InteractiveTile";
import { useContext } from "react";

export const HydratedBoard = ({ size = 100 }: { size:number}) => {
  const ctx = useContext(ActiveChessContext);
  if (!ctx?.game) return null;

  const game = ctx.game;
  const boardSize = 8;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${boardSize}, ${size}px)`,
        width: "fit-content",
        border: "2px solid black",
      }}
    >
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) => (
          <RenderSquareInteractive
            key={`${row}-${col}`}
            row={row}
            col={col}
            piece={game.state.board[row][col]}
            size={size}
          />
        ))
      )}
    </div>
  );
};

export const InteractiveBoard = ({
  game,
  size = 100,
}: {
  game: Game;
  size: number;
}) => {
  return (
    <ActiveChessProvider initialGame={game}>
      <HydratedBoard size={size} />
    </ActiveChessProvider>
  );
};