import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Message from "./Message.js";
import db from './firebase.js';
import { onSnapshot, collection, query, serverTimestamp, addDoc } from "firebase/firestore";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{username:'Piyush', message:'Hello Guys'}, {username:'Akash', message:'Hey'}, {username:'Khushal', message:'Hola'}]);
  const [username, setUsername] = useState("");

  // useEffect: A react hook which allows us to run some code based on some condition

  useEffect(()=>{
    // const querySnapshot = getDocs(collection(db, "messages"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    const q = query(collection(db, "messages"))
    onSnapshot(q, (querySnapshot) => {
      const sorted = querySnapshot.docs
      setMessages(querySnapshot.docs.map(doc => doc.data()));
    });
    // db.collection('messages').onSnapshot(snapshot => {
    //   setMessages(snapshot.docs.map(doc=>doc.data()))
    // })
  }, [])

  useEffect(()=>{
    setUsername(prompt("Please enter your name:"))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    
    addDoc(collection(db, 'messages'), {
      username: username,
      message: input,
      timestamp: serverTimestamp()
    })

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
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
