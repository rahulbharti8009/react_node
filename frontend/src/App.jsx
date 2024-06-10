import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=> {
      axios.get('http://localhost:3000/api/login').then((res)=> {
        setJokes([])
      }).catch((error)=>{
        setJokes([])
      })
    }, [])

    return (
    <>
     <h1>Full stack developer </h1>
     <h1>{jokes.length}</h1>
     {/* {jokes.map((item, index)=> { <div>
      <h3>{item.name}</h3>
      <p>{item.content}</p>
     </div>})} */}
    </>
  )
}

export default App
