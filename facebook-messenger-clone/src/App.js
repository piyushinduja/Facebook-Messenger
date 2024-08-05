import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{username:'Piyush', text:'Hello Guys'}, {username:'Akash', text:'Hey'}, {username:'Khushal', text:'Hola'}]);
  const [username, setUsername] = useState("");

  // useEffect: A react hook which allows us to run some code based on some condition
  useEffect(()=>{
    setUsername(prompt("Please enter your name:"))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username:username, text:input}]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Type your message....</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)}/>
          <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </Button>
        </FormControl>
        
      </form>

      {messages.map((message) => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
