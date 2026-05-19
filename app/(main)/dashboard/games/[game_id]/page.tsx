import { InteractiveBoard } from "@/components/chess_interactive/InteractiveBoard";
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
            <InteractiveBoard game = {game}/>
        </div>
    )
}

export default GamePage