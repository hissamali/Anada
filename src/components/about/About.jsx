import React from 'react'
import './About.css'
import about from '../../images/about.png'
import { GrStatusGood } from 'react-icons/gr';

const About = () => {
    return (

        <div id="about">
            <section className="section-main">
                <div className="section-main-left">
                    <img src={about} alt="about" className="about-image" />
                </div>
                <div className="section-main-right">
                    <h2 className="data-solution">We provide big data analytics Techniques &amp; Data Solutions</h2>
                    <br />
                    <p className="paragraph">
                        Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy.
                        Me in resolution pianoforte continuing we. Most my no spot felt by no.
                        He he in forfeited furniture sweetness he arranging.
                        Me tedious so to behaved written account ferrars moments.
                    </p>
                    <ul className="main-point">
                        <li >
                            <h5> <GrStatusGood /> Various Options</h5>
                            <p className="tedious">
                                Tedious so to behaved written  account ferrars moments.
                            </p>
                        </li>
                        <li>
                            <h5><GrStatusGood className="status-icon" /> Professional Services </h5>
                            <p className="tedious">
                                Tedious so to behaved written account ferrars moments.
                            </p>
                        </li>
                    </ul>
                    <p className="btn">Contact</p>
                </div>
            </section>
        </div>
    )
}

export default About