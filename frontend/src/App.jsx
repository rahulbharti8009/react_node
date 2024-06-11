import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=> {
      axios.get('/api/login').then((res)=> {
        console.log("TAG", res.data)
        setJokes(res.data)
      }).catch((error)=>{
        console.log("error", JSON.stringify(error))
        setJokes([])
      })
    })

    return (
    <>
     <h1>Full stack developer </h1>

     <h1>{jokes?.length}</h1>
     <h1>{jokes?.message}</h1>
     {/* {jokes.map((item, index)=> { <div>
      <h3>{item.name}</h3>
      <p>{item.content}</p>
     </div>})} */}
    </>
  )
}

export default App
