"use client"
import { Game } from "@/types/game";
import { Board } from "./chess/Board";
import { useRouter } from "next/navigation";


export const GameCard = (game: Game) => {
    const router = useRouter();

    return (
        <div className="flex flex-row items-center gap-4" key={game.id} onClick={() => router.push(`/dashboard/games/${game.id}`)}>
            <div className="w-1/3">
                <p>Turn: {game.turnCounter}</p>
            </div>

            <div className="w-2/3">
                <Board map={game.state.board} />
            </div>
        </div>
    )
}