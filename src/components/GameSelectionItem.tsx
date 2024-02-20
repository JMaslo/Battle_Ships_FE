import { GameInfo } from "@/api/GameInfo";

function GameSelectionItem({ game, onSelect }: { game: GameInfo, onSelect: () => void }) {
  return (
    <li className="border-2 border-black mb-2 p-2 text-lg">
      <h3>{game.name}</h3>
      <button className="bg-sky-800 p-2 rounded-lg text-gray-100 hover:bg-sky-600" onClick={onSelect}>Join</button>
    </li>
  );
}

export default GameSelectionItem;
