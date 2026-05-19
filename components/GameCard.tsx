"use client"
import { Game } from "@/types/game";
import { Board } from "./chess_static/Board";
import { useRouter } from "next/navigation";

type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-row items-stretch gap-4 h-72"
      onClick={() => router.push(`/dashboard/games/${game.id}`)}
    >
      <div className="w-1/3 flex items-center">
        <p>Turn: {game.turnCounter}</p>
      </div>

      <div className="w-2/3 flex items-center justify-center">
        <Board map={game.state.board} size={32} />
      </div>
    </div>
  );
};