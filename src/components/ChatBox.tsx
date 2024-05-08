import React, { useState } from "react";
import "./ChatBox.css"; // Importa el archivo CSS

interface ChatBoxProps {
  onSubmit: (message: string) => void;
  messages: string[]; // Nueva prop messages
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSubmit, messages }) => { // Incluye messages en los parámetros de la función
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-box"> {/* Aplica la clase CSS al contenedor del chat */}
      <div className="message-container"> {/* Aplica la clase CSS al contenedor de mensajes */}
        {/* Muestra los mensajes */}
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Próximamente AI Wallet....."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatBox;
