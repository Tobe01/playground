import { ChatStructure } from "./chat-structure";
import { ChatInput } from '../components/chat-input';
import { useEffect, useRef } from 'react';
import './chat-structure.css';

export function Messages({messages, setMessages}){
  
  const chatMessageRef = useRef(null);

  useEffect(()=>{
    const chatEffect = chatMessageRef.current;
    
    {chatEffect ? chatEffect.scrollTop = chatEffect.scrollHeight : ''}
  }, []);
  

  return(
    <div ref={chatMessageRef} className="chatMessage">
     {messages.map((message) => {
        return (
          <>
            <ChatStructure message={message.message} sender={message.sender} key={message.id} />
          </>
        );
      })}
      <ChatInput messages={messages} setMessages={setMessages} />
    </div>
  )
}