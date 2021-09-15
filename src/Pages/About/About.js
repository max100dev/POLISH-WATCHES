import React from 'react'
import poland from '../../Assets/Images/poland.png'

function About() {
    return (
        <section className="about-page">
            <div className="left-section">
                <img src={poland} alt="Polish Flag" />
            </div>
            <div className="right-section">
                <h1 className="right-section-title">Who Are We?</h1>
                <h3 className="right-section-description">We are the largest community in the world gathering up collectors, passionates, lovers, enthusiasts of watches manufactured in Poland! Since we started our joruney we had the goal of promoting polish brands to the whole world. And that's the reason we are here. Have you ever saw that many polish watches in your life? </h3>
            </div>
        </section>
    )
}

export default About
