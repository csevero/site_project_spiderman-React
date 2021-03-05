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
    const [bxActive, setBxActive] = useState('')
    const [menuActive, setMenuActive] = useState('')

    return (
        <header>
            {/* Navbar Desktop */}
            <nav className="navbar-desktop">
                <div className="nav-menu">
                    <img className="logo" src={logoSpider} alt="spider logo" />
                    <ul className="nav-menu-items">
                        <Link to={{ pathname: '/' }}>
                            <li className="nav-link">home</li>
                        </Link>
                        <Link to="/story">
                            <li className="nav-link">story</li>
                        </Link>
                        <Link to="/wallpapers">
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
                    <a
                        href="https://www.facebook.com/SpiderManPS5/"
                        target="_blank"
                        rel="noreferrer">
                        <FaceIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/spiderman/"
                        target="_blank"
                        rel="noreferrer">
                        <InstaIcon />
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=T03PxxuCfDA"
                        target="_blank"
                        rel="noreferrer">
                        <YtbIcon />
                    </a>
                    <a
                        href="https://twitter.com/milesmoralesbr"
                        target="_blank"
                        rel="noreferrer">
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
                    className={`bx ${bxActive} mr-2`}
                    id="bx"
                    onClick={() => {
                        setBxActive((prev) => (prev === '' ? 'bx-active' : ''))
                        setMenuActive((prev) =>
                            prev === '' ? 'active-menu-mobile' : ''
                        )
                        setOpenMenu(!openMenu)
                    }}></div>
            </nav>

            {/* Menu mobile */}
            <nav className={`menu-mobile ${menuActive}`}>
                <ul className="menu-options">
                    <Link to="/">
                        <li className="nav-link-mobile">home</li>
                    </Link>
                    <Link to="/story">
                        <li className="nav-link-mobile">story</li>
                    </Link>
                    <Link to="/wallpapers">
                        <li className="nav-link-mobile">wallpapers</li>
                    </Link>
                </ul>
                <div className="nav-social-mobile">
                    <a
                        href="https://www.facebook.com/SpiderManPS5/"
                        target="_blank"
                        rel="noreferrer">
                        <FaceIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/spiderman/"
                        target="_blank"
                        rel="noreferrer">
                        <InstaIcon />
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=T03PxxuCfDA"
                        target="_blank"
                        rel="noreferrer">
                        <YtbIcon />
                    </a>
                    <a
                        href="https://twitter.com/milesmoralesbr"
                        target="_blank"
                        rel="noreferrer">
                        <TtwIcon />
                    </a>
                </div>
            </nav>
        </header>
    )
}
