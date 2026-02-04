import { useState, useEffect } from "react";
import { Messages } from "../components/messages";
import './App.css';

function App() {
  const [messages, setMessages] = useState(()=>{
    const stored = localStorage.getItem('messages');
    return stored ? JSON.parse(stored) : []
  });


  useEffect(()=>{
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);
  
 
  return (
    <div>
      <Messages messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
