import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hello', 'Heyy', 'How are you']);

  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      
      <form>
      
      <input value={input} onChange={event => setInput(event.target.value)} />
      <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
      </form>
      
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
