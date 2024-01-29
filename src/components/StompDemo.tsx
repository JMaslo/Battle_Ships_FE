import { useState } from 'react'
import { useSubscription, useStompClient, Client } from "react-stomp-hooks";

// equivalents to classes in the dto package in backend
interface HelloRequest {
    name: string;
}

interface HelloResponse {
    message: string;
}
  
function StompDemo() {
    const [name, setName] = useState('')
    const [response, setResponse] = useState('')
    const [greeting, setGreeting] = useState('')
    // this will receive responses to 'hello' requests 
    useSubscription("/user/queue/hello", (message) => handleResponse(JSON.parse(message.body)));
    // this will receive broadcasts from the server - in this case it is just a string, but could be a JSON object as well 
    useSubscription("/topic/greetings", (message) => setGreeting(message.body));
    const stompClient: Client | undefined = useStompClient();

    const handleResponse = (msg: HelloResponse) => {
        // msg is what StompDemoController.hello() returns 
        setResponse(msg.message);
    }

    const sendToServer = () => {
        const request: HelloRequest = {
            name: name
        }
        stompClient?.publish({
            destination: '/app/topic/hello',        // calls StompDemoController.hello()
            body: JSON.stringify(request)
        })
    }
    
    return (
        <div>
            <h3>Stomp demo</h3>
            <input type="text" placeholder='enter name' onChange={e => setName(e.target.value)} />
            <button className="button border" onClick={sendToServer}>Send to server</button>
            <h4>Response from server: {response}</h4>
            <h4>Last greeting broadcast: {greeting}</h4>
        </div>
    )
}


export default StompDemo;
