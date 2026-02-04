import "./chat-structure.css";

export function ChatStructure({ message, sender }) {
  return (
    <>
      {sender === "robot" && 
        <div className='robot'>
          <img width="50" src="../public/robot.avif" />
          {message}
        </div>    
      }
      {sender === "user" && 
        <div className='user'>
          <img width="50" src="../public/images.png" />
          {message}
        </div> 
      }
    </>
  );
}
