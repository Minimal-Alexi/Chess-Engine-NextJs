import { GameCard } from "@/components/GameCard";
import { getAllMyGames } from "@/lib/games";
import { Game } from "@/types/game";

const AllMyGamesPage = async () => {
  const res = await getAllMyGames();
  const json = await res.json();
  const games = json.games;
  console.log(games);

  return (
    <div>
      <div>My Games</div>
          {games.map((game: Game) => (
              <GameCard key={game.id} game={game} />
          ))}
    </div>
  );
};

export default AllMyGamesPage;