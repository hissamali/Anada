import React from 'react'
import './Home.css'
import home from '../../images/home.png'

const Home = () => {
    return (

        <div id="home">
            <header className="container header">
                <div className="header-left">
                    <p className="heading">Applying Data <br /> Science & Techniques</p>
                    <p className="para">With Modern System</p>
                    <p className="btn">Contact</p>
                </div>
                <div className="header-right">
                    <img src={home} alt="home" className="home-image" />
                </div>
            </header>
        </div>
    )
}

export default Home