import React from 'react'
import "./Homebody.css"

const Homebody = () => {
    return (
        <div className="homebody">
            <div className="dark-background">
                <img src="../assets/darkbg.jpg" alt="" />
                <div className="dark-content">
                    <h3>Not sure where to go? Perfect</h3>
                    <button>I am flexible</button>
                </div>
            </div>

            <div className="gift-card">
                <div className="left-content">
                    <p>Introducing</p>
                    <h1>Airbnb <br /> gift cards</h1>
                    <button>Shop Now</button>
                </div>

                <div className="right-image">
                    <img src="../assets/snow.jpg" alt="" />
                </div>
            </div>


            <div className="next-trip">
                <h1>INspiration for your next trip</h1>
            </div>
        </div>
    )
}

export default Homebody
