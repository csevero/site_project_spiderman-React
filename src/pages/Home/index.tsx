import React from 'react'
import Header from '../../components/Header'
import Tilt from 'react-parallax-tilt'

import spiderManLogo from '../../assets/images/spiderman-text.png'
import psnIcon from '../../assets/images/ps.svg'
import marvelIcon from '../../assets/images/marvel.svg'
import spiderMain from '../../assets/images/spiderman-img-main.png'

import spiderVideo from '../../assets/videos/spiderman2.mp4'

import './styles.css'

export default function Main() {
    return (
        <>
            <section className="bg-video">
                <video className="video" autoPlay loop muted>
                    <source src={spiderVideo} type="video/mp4" />
                </video>
            </section>
            <Header />
            <section className="container">
                <div className="container-1">
                    <img style={{ width: '100%' }} src={spiderManLogo} alt="" />
                    <p>
                        A mais recente aventura no universo do Homem-Aranha irá
                        construir e expandir "Homem-Aranha da Marvel" por meio
                        de uma história totalmente nova. Os jogadores irão
                        experimentar a ascensão de Miles Morales à medida que
                        ele domina novos poderes para se tornar seu próprio
                        Homem-Aranha.
                    </p>
                    <div className="buttons my-2">
                        <a href="/" className="btn">
                            Pre-order now
                        </a>
                        <a href="/" className="btn-secundary">
                            Watch the teaser
                        </a>
                    </div>
                    <div className="flex-align-center">
                        <a className="mr-2" href="/">
                            <img src={psnIcon} alt="" />
                        </a>
                        <a href="/">
                            <img src={marvelIcon} alt="" />
                        </a>
                    </div>
                </div>
                <div className="container-2">
                    <Tilt
                        perspective={500}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}>
                        <img src={spiderMain} alt="" className="spiderman" />
                    </Tilt>
                </div>
            </section>
        </>
    )
}
