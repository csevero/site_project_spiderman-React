import React from 'react'
import Header from '../../components/Header'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import wallPaper1 from '../../assets/images/wallpaper-1.png'
import wallPaper2 from '../../assets/images/wallpaper-2.png'
import wallPaper3 from '../../assets/images/wallpaper-3.png'
import wallPaper4 from '../../assets/images/wallpaper-4.png'
import wallPaper5 from '../../assets/images/wallpaper-5.png'
import wallPaper6 from '../../assets/images/wallpaper-6.png'

import './styles/styles.css'

export default function WallpapersPage() {
    return (
        <>
            <Header />
            <div className="container-wallpapers">
                <p>
                    Selecionamos alguns imagens em alta definição para vocês!
                    Escolha suas fotos preferidas para usar de papel de parede
                    nos seus dispositivos!
                </p>
                <AwesomeSlider
                    className="carousel-wallpapers"
                    mobileTouch={true}
                    transitionDelay={1}>
                    <div className="item-carousel">
                        <img src={wallPaper1} alt="" />
                    </div>
                    <div className="item-carousel">
                        <img src={wallPaper2} alt="" />
                    </div>
                    <div className="item-carousel">
                        <img src={wallPaper3} alt="" />
                    </div>
                    <div className="item-carousel">
                        <img src={wallPaper4} alt="" />
                    </div>
                    <div className="item-carousel">
                        <img src={wallPaper5} alt="" />
                    </div>
                    <div className="item-carousel">
                        <img src={wallPaper6} alt="" />
                    </div>
                </AwesomeSlider>
            </div>
        </>
    )
}
