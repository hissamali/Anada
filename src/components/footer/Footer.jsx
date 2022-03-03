import React from 'react'
import "./Footer.css"
import logo from '../../images/logo.png'

const Footer = () => {
    return (

        <footer>
            <div className="main-footer">
                <div className="logo-img">
                    <img src={logo} alt="logo" />
                    <br />
                    <p className="Required">
                        Required honoured trifling eat pleasure man <br /> relation.
                        Assurance yet bed was improving furniture man.
                        Distrusts delighted
                    </p>
                </div>
            </div>
            <div class="col-lg-6" className="copy">
                <p>© Copyright 2019. All Rights Reserved by <a href="#">validthemes</a></p>
            </div>
        </footer>
    )
}

export default Footer