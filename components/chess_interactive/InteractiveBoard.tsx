"use client";

import { ActiveChessProvider } from "@/context/activeChessContext";
import {Game} from "@/types/game"
import { RenderSquare } from "../chess_static/Tile";

export const InteractiveBoard = ({ game, size = 100 }: { game: Game, size:number}) => {
      const boardSize = 8;

    return(
        <ActiveChessProvider initialGame={game}>
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
                            <RenderSquare
                              key={`${row}-${col}`}
                              row={row}
                              col={col}
                              piece={game.state.board[row][col]}
                              size={size}
                            />
                          ))
                        )}
                </div>
            <div>
              <h2>Controls</h2>
              <p>Click to select a piece</p>
              <p>Press C to deselect a piece</p>
            </div>
        </ActiveChessProvider>
    )
}