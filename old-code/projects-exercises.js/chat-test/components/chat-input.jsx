import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import './chat-structure.css';

export function ChatInput({ messages, setMessages }) {
  const [inputData, setInputData] = useState();

  function getData(event) {
    setInputData(event.target.value);
  }

  async function fetchKey(event){
    if (event.key === "Enter"){
          const userMessage = [
            ...messages,
            {
              message: inputData,
              sender: "user",
              id: crypto.randomUUID()
            },
          ];

          setInputData("");

          setMessages(userMessage);

          const response = await Chatbot.getResponseAsync(inputData);
          setMessages([
            ...userMessage,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID()
            },
          ]);
          
    };
  };

  async function renderData() {
    const userMessage = [
      ...messages,
      {
        message: inputData,
        sender: "user",
        id: crypto.randomUUID()
      },
    ];

    setInputData("");

    setMessages(userMessage);

    const response = await Chatbot.getResponseAsync(inputData);
    setMessages([
      ...userMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      },
    ])
  };

  return (
    <div className="inputCont">
      <input
      className="input"
        value={inputData}
        onChange={getData}
        onKeyDown={fetchKey}
        placeholder="type message"
        size="25"
      />
      <button onClick={renderData}>Send</button>
    </div>
  );
}
