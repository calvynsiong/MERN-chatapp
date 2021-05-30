import React, { useState } from 'react'
import { Avatar, IconButton, InputBase } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import axios from '../axios'
import DeleteIcon from '@material-ui/icons/Delete'

const Chat = ({ desktop, messages }) => {
  const [input, setInput] = useState('')

  const sendMessage = async e => {
    e.preventDefault()

    await axios.post('/api/messages/new', {
      message: input,
      name: 'Calvyn',
      timestamp: new Date(Date.now()),
      received: false
    })
    setInput('')
  }

  const deleteMessages = async () => {
    await axios.delete('/api/messages/sync', {})
  }

  return (
    <section className={`chat ${desktop && `chat_desktop`}`}>
      <div className='chat_header'>
        <Avatar></Avatar>
        <div className='chat_header_title'>
          <h3>Person </h3>
          <p>Last seen at this time</p>
        </div>
        <div className='chat_header_icons'>
          <IconButton aria-label='delete' onClick={deleteMessages}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
          <IconButton aria-label='links'>
            <LinkIcon></LinkIcon>
          </IconButton>
          <IconButton aria-label='more'>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        {messages.map(message => {
          return (
            <p
              key={message._id}
              className={`chat_body_message ${message.received && `receiver`} `}
            >
              <span className='chat_body_name'>{message.name}</span>
              {message.message}
              <span className='chat_body_timestamp'>{message.timestamp}</span>
            </p>
          )
        })}
      </div>
      <div className='chat_footer'>
        <IconButton>
          <InsertCommentIcon></InsertCommentIcon>
        </IconButton>
        <IconButton>
          <EmojiEmotionsIcon></EmojiEmotionsIcon>
        </IconButton>
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Type your message here'
            className='sidebar_search_input'
          />
          <button type='submit' onClick={sendMessage}></button>
        </form>
      </div>
    </section>
  )
}

export default Chat
