import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket;

const Home = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState('')
  useEffect(() => {
    async function sockinit() {
      await fetch('/api/v1/sock');
      socket = io()
    
      socket.on('connect', () => {
        console.log('connected')
      })
      
    }
    sockinit()

  }, [])

  

  
  return (
    
    <>
    
    </>
  )
}

export default Home;