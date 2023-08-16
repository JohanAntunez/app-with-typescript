import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import {User} from './types'

interface AppSate {
  user: Array<User>
  newUsersNumber: number
}
const INITIAL_STATE = [
  {
    name: 'Johan',
    months: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Johan es un usuario prermium'
  },
  {
    name: 'Alex',
    months: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
  }
]

function App() {
  const [users, setUsers] = useState<AppSate["user"]>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setUsers(INITIAL_STATE)
  }, [])

  const handleNewUser = (newUser: User): void => {
    setUsers(users => [...users, newUser])
  }


  return (
    <div className="App" ref={divRef}>
      <h1>Users</h1>
      <List users={users}/>
      <Form onNewUser={handleNewUser}/>
    </div>
  )
}

export default App
