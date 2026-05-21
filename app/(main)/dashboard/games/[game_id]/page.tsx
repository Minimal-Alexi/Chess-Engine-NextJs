import { InteractiveBoard } from "@/components/chess/chess_interactive/InteractiveBoard";
import { PlayersCard } from "@/components/chess/PlayersCard";
import { getMyGame } from "@/lib/games"

const GamePage = async ({params}: {params: {game_id:string}}) => {
    const {game_id} = await params

    const res = await(getMyGame(Number(game_id)));
    const json = await res.json();
    const game = json.game;
    console.log(game);

    return (
        <div>
            <div>Match Page</div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <InteractiveBoard game={game} size={100} />
                <PlayersCard
                    turnCounter={game.game_id}
                    playerWhite={game.players.white}
                    playerBlack={game.players.black}
                />
            </div>
        </div>
    )
}

export default GamePage