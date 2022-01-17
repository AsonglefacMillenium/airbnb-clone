import React from 'react'
import Header from '../Header/Header'
import "./Homebody.css"

const Homebody = () => {
    return (
        <div className="homebody">
        <Header/>
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

            <div className="discover">
                <h1>Discover airbnb experiences</h1>
                <div className="discover-items">
                    <section className="discover-item1">
                    <div className="discover-text">
                        <h1>Things to do <br /> on your trip</h1>
                        <button>Experiences</button>
                    </div>

                    </section>

                    <section className="discover-item2">
                    <div className="discover-text">
                        <h1>Things to do <br /> at home</h1>
                        <button>Online Experiences</button>
                    </div>

                    </section>
                </div>
            </div>

            <div className="ask-host">
                <h1>Questions <br /> about <br /> hosting?</h1>

                <button>Ask a Superhost</button>
            </div>
        </div>
    )
}

export default Homebody
