import React from 'react'
import { Routes, Route } from 'react-router'
import Homebody from './Components/Homebody/Homebody'
import Shop from './Components/Shop/Shop'

const Routing = () => {
    return (
        <div className="routing">

        <Routes>
            <Route path="/" element={<Homebody />}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
        </Routes>
            
        </div>
    )
}

export default Routing
