import React from 'react'
import { Route, Router, Routes} from 'react-router-dom'
import Home from './components/Home'
import SingleMovie from './components/SingleMovie'
import './App.css'


const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='movie/:id' element={<SingleMovie/>}/>
      </Routes>
      
    </div>
  )
}

export default App
