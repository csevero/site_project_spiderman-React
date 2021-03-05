import gsap from 'gsap/all'
import React, { useEffect } from 'react'
import { ReactComponent as LogoSpider } from '../../assets/images/logo-spider.svg'
import './styles.css'

export default function BgLoader() {
    const tl = gsap.timeline()

    useEffect(() => {
        tl.fromTo(
            '.bg-loader',
            { width: '100%' },
            { duration: 1, width: '0%', delay: 5, ease: 'expo.inOut' }
        )
    })

    return (
        <section className="bg-loader">
            <LogoSpider className="logo-spiderman" />
        </section>
    )
}
