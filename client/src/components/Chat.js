import React from 'react'
import { Avatar, IconButton, InputBase } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import SearchIcon from '@material-ui/icons/Search'

const Chat = ({ desktop, messages }) => {
  return (
    <section className={`chat ${desktop && `chat_desktop`}`}>
      <div className='chat_header'>
        <Avatar></Avatar>
        <div className='chat_header_title'>
          <h3>Person </h3>
          <p>Last seen at this time</p>
        </div>
        <div className='chat_header_icons'>
          <IconButton aria-label=''>
            <LinkIcon></LinkIcon>
          </IconButton>
          <IconButton aria-label=''>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        {messages.map(message => {
          return (
            <p
              className={`chat_body_message ${message.received && `receiver`} `}
            >
              <span className='chat_body_name'>{message.name}</span>
              Hello
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
        <form action='|'>
          <input
            placeholder='Type your message here'
            className='sidebar_search_input'
          />
          <button type='submit'> Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Chat
