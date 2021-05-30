import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Redirect
} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Pusher from 'pusher-js'
import axios from './axios'

function App () {
  const [desktop, setDesktop] = useState(false)
  const [messages, setMessages] = useState([])

  
  useEffect(() => {
    const pusher = new Pusher('23db6c53bbd0369ad718', {
      cluster: 'us2'
    })
    
    const channel = pusher.subscribe('messages')
    channel.bind('inserted', function (data) {
      setMessages([...messages, JSON.stringify(data)])
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [])



  useEffect(() => {
    const fetchMessages = async () => {
      let response = await axios.get('/api/messages/sync')
      setMessages(response.data)
    }
    fetchMessages()
  })
  

  useEffect(() => {
    const desktopView = () => {
      if (window.innerWidth < 600) {
        setDesktop(false)
      } else {
        setDesktop(true)
      }
    }
    window.addEventListener('resize', desktopView)
    return () => {
      return window.removeEventListener('resize', desktopView)
    }
  }, [desktop])

  return (
    <Router>
      <div className='app'>
        <div className='app_main'>
          <Route exact path='/'>
            <Sidebar desktop={desktop}></Sidebar>
          </Route>
          {<Chat desktop={desktop} messages={messages}></Chat>}
        </div>
      </div>
    </Router>
  )
}

export default App
