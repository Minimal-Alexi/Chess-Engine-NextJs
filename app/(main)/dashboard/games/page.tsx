import { Board } from "@/components/chess/Board";
import { getAllMyGames } from "@/lib/games";

const AllMyGamesPage = async () => {
  const res = await getAllMyGames();
  const json = await res.json();
  const games = json.games;
  console.log(games);

  return (
    <div>
      <div>AllMyGamesPage</div>

      {games.map((game) => (
        <div key={game.id}>
          <Board map={game.state.board}/>
        </div>
      ))}
    </div>
  );
};

export default AllMyGamesPage;