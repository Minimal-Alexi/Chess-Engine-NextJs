"use client";

import { ActiveChessProvider } from "@/context/activeChessContext";
import {Game} from "@/types/game"

export const InteractiveBoard = ({ game }: { game: Game }) => {
    return(
        <ActiveChessProvider initialGame={game}>
            <div></div>
        </ActiveChessProvider>
    )
}