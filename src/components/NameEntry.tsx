import { useState } from 'react'
import { useSubscription, useStompClient, Client } from "react-stomp-hooks";

interface SetPlayerNameRequest {
  name: string;
}

interface SetPlayerNameResponse {
  status: string;
  message?: string;
}

interface Props {
  setPlayerName: (name: string) => void
}

/**
 * The NameEntry component is used to allow the user to enter their name. Once entered, the name is sent to the server
 * to be registered. If the server accepts the name, the setPlayerName function is called with the name as an argument.
 * This causes the MainContainer to transition to the "game selection" state, hiding this component.
 * If the server rejects the name, an error message is displayed.
 * @param props.setPlayerName a function that is called with the name as an argument when the server accepts the name
 * @returns a form that allows the user to enter their name
 */
function NameEntry(props: Props) {
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const stompClient: Client | undefined = useStompClient();

  // Handles the response from the server
  useSubscription("/user/queue/setNameResult", (message) => handleResponse(JSON.parse(message.body)));
  const handleResponse = (msg: SetPlayerNameResponse) => {
    if (msg.status == 'ok') {
      props.setPlayerName(name)
      return
    }
    setErrorMessage(msg.message ? msg.message : 'Unknown error');
  }

  // Sends the name to the server
  const sendToServer = () => {
    if (name === '') {
      return
    }
    const request: SetPlayerNameRequest = {
      name: name
    }
    stompClient?.publish({
      destination: '/app/topic/setName',
      body: JSON.stringify(request)
    })
  }

  return (
    <form className='container p-8' onSubmit={e => {e.preventDefault(); sendToServer()}}>
      <input className='border-2 border-black p-1' type="text" placeholder='enter name' onChange={e => setName(e.target.value)} />
      <button className="ml-2 border-2 border-black p-1" type="submit">Submit</button>
      {errorMessage && <h4>{errorMessage}</h4>}
    </form>
  )
}

export default NameEntry;
