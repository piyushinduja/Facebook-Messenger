import "./App.css";
import React, { useEffect, useState } from "react";
import { FormControl, Input, IconButton } from "@mui/material";
import Message from "./Message.js";
import db from "./firebase.js";
import {
  onSnapshot,
  collection,
  query,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import FlipMove from "react-flip-move";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useEffect: A react hook which allows us to run some code based on some condition

  useEffect(() => {
    const q = query(collection(db, "messages"));
    onSnapshot(q, (querySnapshot) => {
      let sorted_array = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        message: doc.data(),
      }));
      sorted_array = sorted_array.sort(
        (a, b) => b.message.timestamp - a.message.timestamp
      );
      setMessages(sorted_array);
    });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name:"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    addDoc(collection(db, "messages"), {
      username: username,
      message: input,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      {/* <img src="../public/messenger-logo-png.png" width={100} alt="Messenger Logo"/> */}
      <h1>Hello Everyone</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Type ypur message...."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            title="Title"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
