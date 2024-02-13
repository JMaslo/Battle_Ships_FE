interface Props {
  playerName: string
  setGameId: (id: string) => void
}

/**
 * The GameSelection component is used to allow the user to select a game to join or create. Once a game is selected,
 * the setGameId function is called with the game id as an argument. This causes the MainContainer to transition to the
 * "game" state, hiding this component.
 * @param props.playerName the name of the player
 * @param props.setGameId a function that is called with the game id as an argument when the user selects a game
 * @returns a form that allows the user to select a game to join or create
 */
function GameSelection(props: Props) {
  return (
    <h2>GameSelection not implemented, your name is {props.playerName}</h2>
  )
}

export default GameSelection;
