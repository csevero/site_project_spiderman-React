import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import marvelIcon from '../../assets/images/marvel.svg'
import psnIcon from '../../assets/images/ps.svg'
import spiderMain from '../../assets/images/spiderman-img-main.png'
import spiderManLogo from '../../assets/images/spiderman-text.png'
import { ReactComponent as SvgLines } from '../../assets/images/svg-lines.svg'
import spiderVideo from '../../assets/videos/spiderman2.mp4'
import Header from '../../components/Header'
import './styles/styles.css'

export default function Main() {
    const tl = gsap.timeline()

    useEffect(() => {
        tl.fromTo('.bg-video', { opacity: 0 }, { duration: 1, opacity: 1 })

        tl.fromTo(
            '.bg-lines',
            { opacity: 0 },
            { duration: 1, opacity: 1, ease: 'slow' }
        )

        tl.fromTo(
            '#item-1',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power4.out' },
            '-=2'
        )
        tl.fromTo(
            '#item-2',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power4.out' },
            '-=1.8'
        )
        tl.fromTo(
            '#item-3',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power4.out' },
            '-=1.6'
        )
        tl.fromTo(
            '#item-4',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power4.out' },
            '-=1.4'
        )
        tl.fromTo(
            '#item-5',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power4.out' },
            '-=0.8'
        )
    })

    return (
        <>
            {/* Movie Background */}
            <section className="bg-video">
                <video className="video" autoPlay loop muted>
                    <source src={spiderVideo} type="video/mp4" />
                </video>
            </section>

            {/* Lines of background */}
            <section className="bg-lines">
                <SvgLines />
            </section>

            {/* Navbar and Menu */}
            <Header />
            <section className="container-home">
                <div className="container-1">
                    <img
                        style={{ width: '100%' }}
                        src={spiderManLogo}
                        alt=""
                        id="item-1"
                    />
                    <p id="item-2">
                        A mais recente aventura no universo do Homem-Aranha irá
                        construir e expandir "Homem-Aranha da Marvel" por meio
                        de uma história totalmente nova. Os jogadores irão
                        experimentar a ascensão de Miles Morales à medida que
                        ele domina novos poderes para se tornar seu próprio
                        Homem-Aranha.
                    </p>
                    <div className="buttons my-2" id="item-3">
                        <a
                            href="https://www.playstation.com/pt-br/games/marvels-spider-man-miles-morales/"
                            className="btn"
                            target="_blank"
                            rel="noreferrer">
                            Pre-order now
                        </a>
                        <a
                            href="https://youtu.be/qjRzm9A7DU4"
                            className="btn-secundary"
                            target="_blank"
                            rel="noreferrer">
                            Watch the teaser
                        </a>
                    </div>
                    <div className="flex-align-center" id="item-4">
                        <a
                            className="mr-2"
                            href="https://www.playstation.com/pt-br/"
                            target="_blank"
                            rel="noreferrer">
                            <img src={psnIcon} alt="" />
                        </a>
                        <a
                            href="https://www.marvel.com/"
                            target="_blank"
                            rel="noreferrer">
                            <img src={marvelIcon} alt="" />
                        </a>
                    </div>
                </div>
                <div className="container-2" id="item-5">
                    <Tilt perspective={500} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                        <img src={spiderMain} alt="" className="spiderman" />
                    </Tilt>
                </div>
            </section>
        </>
    )
}
