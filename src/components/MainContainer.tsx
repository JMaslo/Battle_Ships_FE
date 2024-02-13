import { useState, useEffect } from 'react'
import Players from "./players/Players";
import Fields from "./fields/Fields";
import NameEntry from './NameEntry';
import GameSelection from './GameSelection';
import { useStompClient, Client } from "react-stomp-hooks";

/**
 * Handles the main state transitions of the application.
 * Before the user has entered a name, the application is in the "entering name" state.
 * In this state, the NameEntry component is displayed. Whenit successfully negotiates a name with the server, 
 * the application transitions to the "game selection" state, where the GameSelection component is displayed.
 * Finally, when the user has started or joined a game, the application is in the "game" state, where the Game component is displayed.
 * The application is in the "entering name" iff playerName is an empty string.
 * The application is in the "game selection" state iff playerName is not an empty string, but gameId is an empty string.
 * The application is in the "game" state iff playerName and gameId are not empty strings.
 */
function MainContainer() {
  const [playerName, setPlayerName] = useState('')
  const [gameId, setGameId] = useState('')
  const stompClient: Client | undefined = useStompClient();

  useEffect(() => {
    if (!stompClient?.connected) {
      setPlayerName('')
    }
  }, [stompClient?.connected])

  if (!stompClient?.connected) {
    return <h2>Connecting to server...</h2>
  } else if (playerName === '') {
    return <NameEntry setPlayerName={setPlayerName} />
  } else if (gameId === '') {
    return <GameSelection playerName={playerName} setGameId={setGameId} />
  } else {
    // Currently, this cannot be reached because the GameSelection component is not implemented, thus gameId is never set.
    return (
      <div>
        <Players /> 
        <Fields /> 
      </div>
    )
    // TODO: use a component:
    // return <Game playerName={playerName} gameId={gameId} />
  }
}

export default MainContainer;
