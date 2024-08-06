import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";
import './Message.css'

function Message({message, username}) {
  const isUser = username === message.username
  return (
    <div>
        <Card className={`message ${isUser && 'message__user'}`}>
          <CardContent className={isUser ? 'message__userCard' : 'message__guestCard'}>
            <Typography color='black' variant='h5' component='h2'>
            {message.username}: {message.message}
            </Typography>
          </CardContent>
        </Card>
        {/* <h2>{props.username}:{props.text}</h2> */}
    </div>
  )
}

export default Message