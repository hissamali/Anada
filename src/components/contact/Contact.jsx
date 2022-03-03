import React from 'react'
import './Contact.css'

const Contact = () => {
    return (

        <div id="contact">
            <main className="Contact">
                <section className=" contact-section">
                    <h6 className="we-love">We’d love to hear from you anytime</h6>
                    <div className="text">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group comments">
                                        <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message">
                            <button className="send-message">Send Message</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact