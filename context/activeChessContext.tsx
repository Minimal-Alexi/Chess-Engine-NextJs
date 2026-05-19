"use client"
import { getMyLegalMoves, playTurn } from "@/lib/games";
import { Game } from "@/types/game";
import {
  createContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type ActiveChessContextType = {
    game: Game | null;
    
    selectedSquare: [number, number] | null;
    setSelection: (x:number, y:number) => void;
    clearSelection: () => void;

    highlightedSquares: number[][] | null;
    loadHighlightedSquares: () => void;
    clearHighlightedSquares: () => void;

    onClickDestination: (x:number, y:number) => void;
};

const ActiveChessContext = createContext<ActiveChessContextType | undefined>(
  undefined
);

export function ActiveChessProvider({ children,initialGame }: { children: ReactNode,initialGame: Game | null}) {
    const [game, setGame] = useState<Game | null>(initialGame);
    const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null);
    const [highlightedSquares, setHighlightedSquares] = useState<number[][] | null>(null);


    const setSelection = useCallback((x: number, y: number) => {
        setSelectedSquare([x, y]);}, []);
    const clearSelection = useCallback(() => {setSelectedSquare(null)},[])

    const loadHighlightedSquares = useCallback(async () => {
        if(!selectedSquare || !game){
            return;
        }

        const res = await getMyLegalMoves(game.id,selectedSquare)
        const body = await res.json();
        setHighlightedSquares(body.moves);
    },[game,selectedSquare])

    const clearHighlightedSquares = useCallback(() => {
        setHighlightedSquares(null);
    },[])

    const onClickDestination = useCallback(
    async (x: number, y: number) => {
      if (!game || !selectedSquare) return;

      const from = selectedSquare;
      const to: [number, number] = [x, y];

      const response = await playTurn(game.id, from, to);
      const body = await response.json()

      setGame(body.game);
      setSelectedSquare(null);
      setHighlightedSquares(null);
    },
    [game, selectedSquare]
  );

    return (
    <ActiveChessContext.Provider
      value={{
        game,
        selectedSquare,
        setSelection,
        clearSelection,
        highlightedSquares,
        loadHighlightedSquares,
        clearHighlightedSquares,
        onClickDestination,
      }}
    >
      {children}
    </ActiveChessContext.Provider>
    )
}

