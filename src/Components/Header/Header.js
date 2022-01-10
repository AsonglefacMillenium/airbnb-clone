import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    <img src="../assets/airbnb.png" alt="" />
                </div>

                <div className="search">
                    <p>Search a place</p>
                    <div className="search-img">
                    <img src="../assets/search.png" alt="" />

                    </div>
                   
                </div>
                <div className="right-nav">
                    <div className="host">
                        Become a Host
                    </div>

                    <div className="account"></div>
                </div>
            </div>
        </div>
    )
}

export default Header
