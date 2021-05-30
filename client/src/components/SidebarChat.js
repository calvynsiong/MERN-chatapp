import React from 'react'
import { Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const SidebarChat = () => {


  return (
    <div className='sidebar_tab_chat' >
      <Avatar></Avatar>
      <div className='sidebar_tab_chat_info'>
        <h3>New Person</h3>
        <p>Last convo</p>
      </div>
    </div>
  )
}

export default SidebarChat
