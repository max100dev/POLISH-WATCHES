import React from 'react'
import { Link } from 'react-router-dom'
import partners from '../../Assets/Images/partners.png'
import about from '../../Assets/Images/about.png'
import contact from '../../Assets/Images/contact.png'
function Header() {
    return (
        <header className="header">
            <div className="main-header">
                <div className="logo">

                <Link className="link" to="/">
                    <div className="logo-title">

                    <h1><span className="logo-red">polish</span>watches</h1>
                    </div>
                </Link>
                </div>

                <div className="motto">
                    <h3>Made In Poland</h3>
                </div>

                <div className="general-info">
                    <Link className="link link-nav" to="/partners">
                        <div className="partners">
                            <img src={partners} alt="partners" />
                            <h4>Partners</h4>
                        </div>
                    </Link>

                    <Link className="link link-nav" to="/about">
                        <div className="about">
                            <img src={about} alt="about" />
                            <h4>About</h4>
                        </div>
                    </Link>

                    <Link className="link link-nav" to="/contact">
                        <div className="contact">
                            <img src={contact} alt="contact" />
                            <h4>Contact</h4>
                        </div>
                    </Link>
                </div>
            </div>

            <nav className="navigation">
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li className="parent-sub-list">Brands
                        <ul className="sub-list">
                            <li>Balticus</li>
                            <li>Blonie</li>
                            <li>Chronos-Art</li>
                            <li>GGerlach</li>
                            <li>Leon Prokop</li>
                            <li>Polpora</li>
                            <li>Vratislava</li>
                        </ul>
                    </li>
                    <li>Sales</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
