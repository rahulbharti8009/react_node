import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Button from '@mui/joy/Button';

function App() {
  // const [jokes, setJokes] = useState([])
  // useEffect(()=> {
  //     axios.get('/api/login').then((res)=> {
  //       console.log("TAG", res.data)
  //       setJokes(res.data)
  //     }).catch((error)=>{
  //       console.log("error", JSON.stringify(error))
  //       setJokes([])
  //     })
  //   })

  let [count , setCount] = useState(0)
    return (
      <div>
        <h1>Full stack developer </h1>
        {/* <h1>{jokes?.length}</h1>
        <h1>{jokes?.message}</h1> */}
      <Button onClick={()=> {
        console.log("Rahul")
      }}>Hello world</Button>
     </div>
  )
}

export default App
