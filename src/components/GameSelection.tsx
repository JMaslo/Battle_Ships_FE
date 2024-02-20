import { GameInfo, CreateGameRequest, SelectGameResponse, JoinGameRequest } from "@/api/GameInfo"
import { useState } from "react"
import { useSubscription, useStompClient, Client } from "react-stomp-hooks";
import GameSelectionItem from "./GameSelectionItem"

interface Props {
  playerName: string
  setGameId: (id: string) => void
}

/**
 * The GameSelection component is used to allow the user to select a game to join or create. Once a game is selected,
 * the setGameId function is called with the game id as an argument. This causes the MainContainer to transition to the
 * "game" state, hiding this component.
 * @param playerName the name of the player
 * @param setGameId a function that is called with the game id as an argument when the user selects a game
 * @returns a form that allows the user to select a game to join or create
 */
function GameSelection({ playerName, setGameId }: Props) {
  const [games, setGames] = useState([] as GameInfo[])
  const [errorMessage, setErrorMessage] = useState('')
  const stompClient: Client | undefined = useStompClient();

  // Updates the list of games when the server broadcasts a new list
  useSubscription("/topic/gameList", (message) => setGames(JSON.parse(message.body)));
  const refreshGameList = () => stompClient?.publish({destination: '/app/topic/refreshGameList', body: ''})

  // Handles the response from the server
  useSubscription("/user/queue/selectGameResult", (message) => handleResponse(JSON.parse(message.body)));
  const handleResponse = (msg: SelectGameResponse) => {
    if (msg.status == 'ok') {
      setGameId(msg.gameId)
      return
    }
    setErrorMessage(msg.message ? msg.message : 'Unknown error');
  }

  // Sends the "create game" request name to the server
  const createGame = () => {
    const request: CreateGameRequest = {}
    stompClient?.publish({
      destination: '/app/topic/createGame',
      body: JSON.stringify(request)
    })
  }  

  // Sends the "join game" request to the server
  const joinGame = (gameId: string) => {
    const request: JoinGameRequest = {
      gameId: gameId
    }
    stompClient?.publish({
      destination: '/app/topic/joinGame',
      body: JSON.stringify(request)
    })
  }
  
  refreshGameList()
  return (
    <div>
      <h2>Create or join a game, your name is {playerName}</h2>
      <form className='container p-8' onSubmit={e => {e.preventDefault(); createGame()}}>
        <button className="ml-2 border-2 border-black p-1" type="submit">Create new game</button>
      </form>
      {errorMessage && <h4>{errorMessage}</h4>}
      Available games: <button className="ml-2 border-2 border-black p-1" onClick={refreshGameList}>Refresh</button>
      <ul className="p-2">
        {games.map((game: GameInfo) => (
          <GameSelectionItem key={game.id} game={game} onSelect={() => joinGame(game.id)}/>
        ))}
      </ul>
    </div>
  )
}

export default GameSelection;
