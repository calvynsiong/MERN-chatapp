import React from 'react'
import { Avatar, IconButton, InputBase } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChatIcon from '@material-ui/icons/Chat'
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import SearchIcon from '@material-ui/icons/Search'
import SidebarChat from './SidebarChat'

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar_header'>
          <Avatar></Avatar>
          <div className='sidebar_headerRight'>
            <IconButton>
              <CameraAltIcon></CameraAltIcon>
            </IconButton>
            <IconButton>
              <ChatIcon></ChatIcon>
            </IconButton>
            <IconButton>
              <MoreVertIcon></MoreVertIcon>
            </IconButton>
          </div>
        </div>
        <div className='sidebar_search'>
          <div className='sidebar_search_icon'>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classesName='sidebar_search_input'
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className='sidebar_tab'>
        <h2> Chats </h2>
          <SidebarChat></SidebarChat>
         
        </div>
      </div>
    </>
  )
}

export default Sidebar
