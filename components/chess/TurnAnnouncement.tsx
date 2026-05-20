"use client"

import { UserContext } from "@/context/userContext"
import { Player } from "@/types/player"
import { useContext } from "react"

type TurnAnnouncementProps = {
    turnCounter:number,
    playerWhite:Player,
    playerBlack:Player
}
export const TurnAnnouncement = ({
  playerWhite,
  playerBlack,
  turnCounter,
}: TurnAnnouncementProps) => {
  const ctx = useContext(UserContext);
  if (!ctx) return null;

  const isWhiteTurn = turnCounter % 2 === 0;

  const isCurrentPlayerTurn =
    (ctx.id === playerWhite.userId && isWhiteTurn) ||
    (ctx.id === playerBlack.userId && !isWhiteTurn);

  const currentPlayer = isWhiteTurn ? playerWhite : playerBlack;

  return (
    <div>
      <p>Current turn: {currentPlayer.username}</p>
      {isCurrentPlayerTurn ? (
        <p>Your turn</p>
      ) : (
        <p>Waiting for opponent</p>
      )}
    </div>
  );
};