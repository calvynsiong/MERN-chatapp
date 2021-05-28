import React from 'react'
import { Avatar, IconButton, InputBase } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import SearchIcon from '@material-ui/icons/Search'

const Chat = () => {
  return (
    <section className='chat'>
      <div className='chat_header'>
        <Avatar></Avatar>
        <div className='chat_header_title'>
          <h3>Person </h3>
          <p>Last seen at this time</p>
        </div>
        <div className='chat_header_icons'>
          <IconButton aria-label='' onClick={``}>
            <LinkIcon></LinkIcon>
          </IconButton>
          <IconButton aria-label='' onClick={``}>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className='chat_body_message'>
          <span className='chat_body_name'>Calvyn</span>
          Hello
          <span className='chat_body_timestamp'>
            {new Date().toDateString()}
          </span>
        </p>
        <p className='chat_body_message receiver'>
          <span className='chat_body_name'>Calvyn</span>
          Hello
          <span className='chat_body_timestamp'>
            {new Date().toDateString()}
          </span>
        </p>
      </div>
      <div className='chat_footer'>
        <InsertCommentIcon></InsertCommentIcon>
        <EmojiEmotionsIcon></EmojiEmotionsIcon>
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
