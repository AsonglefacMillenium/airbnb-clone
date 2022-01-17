import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Routing'

const App = () => {
  return (
    <div className="app"> 
    <Router>
    <Routing/>
    

    </Router>            
  
    </div>
  )
}

export default App
