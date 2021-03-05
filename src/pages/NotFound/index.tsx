import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { TimelineMax } from 'gsap'

import { ReactComponent as SvgLines } from '../../assets/images/svg-lines1.svg'

import './styles/styles.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
    const tl = new TimelineMax()

    useEffect(() => {
        tl.fromTo('.bg-lines', { opacity: 0 }, { opacity: 0.4})

        tl.fromTo(
            '#text-1',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power4.out' },
            '-=0.5'
        )
        tl.fromTo(
            '#text-2',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power4.out' },
            '-=0.2'
        )
        tl.fromTo(
            '#text-3',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: 'power4.out' },
            '-=0.2'
        )

        tl.fromTo(
            '.button-safe-area',
            { opacity: 0 },
            { opacity: 1, ease: 'power4.out' }
        )
    })
    return (
        <>
            <Header />
            <div className="container-not-found">
                {/* Background */}
                <section className="bg-lines">
                    <SvgLines />
                </section>

                <section className="texts">
                    <h1 id="text-1">404</h1>
                    <h2 id="text-2">Ops aventureiro, não tem nada por aqui!</h2>
                    <h3 id="text-3">Volte para área segura</h3>
                </section>

                <Link to="/" className="button-safe-area">
                    Ir para área segura
                </Link>
            </div>
        </>
    )
}
