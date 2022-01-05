import React from 'react'
import "./ShopHead.css"
import { Link } from 'react-router-dom'

const ShopHead = () => {
    return (
        <div className="shophead">
         <div className="shop-header">
             <img src="../assets/airbnb.png" alt="" />
             <div className="shophead-right">
                 <Link to="">Redeem</Link>
                 <Link to=""><button>Order gift card</button></Link>
             </div>
         </div>
            
        </div>
    )
}

export default ShopHead
