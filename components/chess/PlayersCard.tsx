import { Player } from "@/types/player"
import { TurnAnnouncement } from "./TurnAnnouncement"

type PlayerCardProps = {
    turnCounter:number,
    playerWhite:Player,
    playerBlack:Player
}

export const PlayersCard = ({playerWhite, playerBlack,turnCounter}:PlayerCardProps) => {
    return (
    <div>
        <div>
            White player:
            {playerWhite.username}
        </div>
        <div>
            Black player:
            {playerBlack.username}
        </div>
        <TurnAnnouncement turnCounter={turnCounter} playerWhite={playerWhite} playerBlack={playerBlack}/>
    </div>
    )
}