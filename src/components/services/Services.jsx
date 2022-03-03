import React from 'react'
import './Services.css'
import { GiArtificialIntelligence } from 'react-icons/gi';

const Services = () => {
    return (

        <div id="services">
            <section className="section">
                <div>
                    <h4>Our Services</h4>
                    <h2>
                        Target your customers with the right <br /> messages
                    </h2>
                </div>
                <div className="main-card">
                    <div className="card-container">
                        <div className="row">
                            <div className="card">
                                <h3>Big Data</h3>
                                <GiArtificialIntelligence className="artifical" />
                            </div>
                            <p className="piano">
                                Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                            </p> <br />
                            <button className="read-more">Read more</button>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="row">
                            <div className="card">
                                <h3>Big Data</h3>
                                <GiArtificialIntelligence className="artifical" />
                            </div>
                            <p className="piano">
                                Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                            </p> <br />
                            <button className="read-more">Read more</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services