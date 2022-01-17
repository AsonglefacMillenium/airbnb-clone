import React from 'react'
import { Routes, Route } from 'react-router'
import Homebody from './Components/Homebody/Homebody'

const Routing = () => {
    return (
        <div className="routing">

        <Routes>
            <Route path="/" element={<Homebody />}></Route>
        </Routes>
            
        </div>
    )
}

export default Routing
