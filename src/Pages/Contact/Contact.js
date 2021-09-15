import React from 'react'

function Contact() {
    return (
        <section className="contact-page">
            <form className="cpage-form">
                <h1 className="form-title">Message Us</h1>
                <div className="user-info"> 
                    {/* <label htmlFor="name">First Name</label> */}
                    <input className="user-input" type="text" name="name" id="name" placeholder="First Name*"required />
                </div>
                <div className="user-info"> 
                    {/* <label htmlFor="last-name">Last Name</label> */}
                    <input className="user-input"  type="text" name="last-name" id="last-name"placeholder="Last Name*" required />
                </div>
                <div className="user-info"> 
                    {/* <label htmlFor="email">Email</label> */}
                    <input className="user-input"  type="email" name="email" id="email"placeholder="Email*" required />
                </div>
                <div className="user-info"> 
                    {/* <label htmlFor="msg">Message</label> */}
                    <textarea className="user-input user-msg"  name="msg" id="msg" placeholder="Message*" required></textarea>
                </div>
                <button className="submit-btn" type="submit">Send</button>
            </form>

            <div className="contact-page-info">
                <div className="contact-details">
                    <h2>Do you want to contact us?</h2>
                    <p>Send us a message directly here!</p>
                </div>
                <div className="contact-details">
                    <h2>Instagram Direct Message</h2>
                    <p className="social-href"><a href="">Go to our instagram</a></p>
                </div>
                <div className="contact-details">
                    <h2>Our Email</h2>
                    <p className="email-href">polishwatches@gmail.com</p>
                </div>
                <div className="contact-details-map">
                    
                </div>
            </div>
        </section>
    )
}

export default Contact
