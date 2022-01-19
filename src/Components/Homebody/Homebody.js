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
                <h1>Inspiration for your next trip</h1>

                <div className="trip-items">
                    <section className="trip-card">
                        <img src="../assets/house1.jpg" alt="" />
                        <h3>Yaounde</h3>
                        <p>3 Kilometers away</p>
                    </section>
                    <section className="trip-card">
                        <img src="../assets/house2.jpg" alt="" />
                        <h3>Douala</h3>
                        <p>195 Kilometers away</p>
                    </section>
                    <section className="trip-card">
                        <img src="../assets/house3.jpg" alt="" />
                        <h3>Kribi</h3>
                        <p>206 Kilometers away</p>
                    </section>
                    <section className="trip-card">
                        <img src="../assets/house4.jpg" alt="" />
                        <h3>Bonaberi</h3>
                        <p>209 Kilometers away</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Homebody
