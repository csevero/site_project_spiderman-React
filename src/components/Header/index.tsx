import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoSpider from '../../assets/images/logo-spider.svg'
import { ReactComponent as FaceIcon } from '../../assets/images/icon-facebook.svg'
import { ReactComponent as InstaIcon } from '../../assets/images/icon-instagram.svg'
import { ReactComponent as YtbIcon } from '../../assets/images/icon-youtube.svg'
import { ReactComponent as TtwIcon } from '../../assets/images/icon-twitter.svg'

import './styles.css'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header>
            {/* Navbar Desktop */}
            <nav className="navbar-desktop">
                <div className="nav-menu">
                    <img className="logo" src={logoSpider} alt="spider logo" />
                    <ul className="nav-menu-items">
                        <Link to="/">
                            <li className="nav-link">home</li>
                        </Link>
                        <Link to="/">
                            <li className="nav-link">story</li>
                        </Link>
                        <Link to="/">
                            <li className="nav-link">wallpapers</li>
                        </Link>
                        <Link to="/">
                            <li
                                className="nav-link"
                                style={{
                                    color: '#ea1d22',
                                    fontStyle: 'italic',
                                }}>
                                #beyourself
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="nav-social">
                    <a href="/">
                        <FaceIcon />
                    </a>
                    <a href="/">
                        <InstaIcon />
                    </a>
                    <a href="/">
                        <YtbIcon />
                    </a>
                    <a href="/">
                        <TtwIcon />
                    </a>
                </div>
            </nav>

            {/* Navbar mobile */}
            <nav className="navbar-mobile" id="navbar-mobile">
                <div className="logo" id="logo-mobile">
                    <img src={logoSpider} alt="logo spider" />
                </div>
                <div
                    className="bx mr-2"
                    id="bx"
                    onClick={() => {
                        const toggle = document.querySelector('#bx')
                        const nav = document.querySelector('.menu-mobile')
                        toggle?.classList.toggle('bx-active')
                        nav?.classList.toggle('active-menu-mobile')
                        setOpenMenu(!openMenu)
                    }}></div>
            </nav>

            {/* Menu mobile */}
            <nav className="menu-mobile">
                <ul className="menu-options">
                    <Link to="/">
                        <li className="nav-link-mobile">home</li>
                    </Link>
                    <Link to="/">
                        <li className="nav-link-mobile">story</li>
                    </Link>
                    <Link to="/">
                        <li className="nav-link-mobile">wallpapers</li>
                    </Link>
                </ul>
                <div className="nav-social-mobile">
                    <a href="/">
                        <FaceIcon />
                    </a>
                    <a href="/">
                        <InstaIcon />
                    </a>
                    <a href="/">
                        <YtbIcon />
                    </a>
                    <a href="/">
                        <TtwIcon />
                    </a>
                </div>
            </nav>
        </header>
    )
}
