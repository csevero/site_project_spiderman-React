import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { gsap } from 'gsap'
import spiderImg1 from '../../assets/images/spiderman-img-1.png'
import spiderImg2 from '../../assets/images/spiderman-img-2.gif'
import spiderImg3 from '../../assets/images/spiderman-img-3.png'

import './styles/styles.css'

export default function Story() {
    const tl = gsap.timeline()

    useEffect(() => {
        tl.fromTo('.item-1', { opacity: 0 }, { opacity: 1 })
        tl.fromTo('.item-2', { opacity: 0 }, { opacity: 1 })
        tl.fromTo('.item-3', { opacity: 0 }, { opacity: 1 })
        tl.fromTo('.item-3', { opacity: 0 }, { opacity: 1 })
        tl.fromTo('#button-story', { opacity: 0 }, { opacity: 1 })
    })
    return (
        <>
            <Header />
            <div className="container-history">
                <div className="items">
                    <section className="item-1">
                        <p>
                            Um ano se passou desde o atentado com o Bafo do
                            Diabo em Nova York, que culminou em uma batalha
                            colossal entre Spider-Man e Otto Octavius, o Doctor
                            Octopus, com nosso herói aracnídeo saindo triunfante
                            da batalha. Algumas perdas não puderam ser evitadas,
                            mas novos aliados surgiram como fruto dos
                            acontecimentos que sacudiram a "Grande Maçã" em
                            2018. Um deles é o jovem Miles Morales. <br />
                            Filho de um honrado policial que foi vítima de um
                            ataque terrorista causado pelos Demônios, então
                            liderados por Martin Li, o Mr. Negative, Miles e sua
                            mãe, Rio Morales, agora vivem no Harlem. O jovem
                            alterna sua rotina entre o apoio à sua mãe na
                            campanha eleitoral para assumir um cargo como
                            vereadora de Nova York e o difícil aprendizado com
                            seu mentor Peter Parker, treinando para se tornar
                            digno de suceder o herói como o novo Spider-Man.
                        </p>
                        <img src={spiderImg1} alt="" />
                    </section>
                    <section className="item-2">
                        <p>
                            Marvel’s Spider-Man: Miles Morales expande o
                            universo criado pela Insomniac em 2018. Estamos na
                            mesma Nova York do jogo anterior, com alguns lugares
                            facilmente reconhecíveis e atividades que já criamos
                            o hábito de realizar quando estávamos na pele de
                            Peter Parker. Como em Marvel’s Spider-Man, ao
                            assumir o balanço de Miles podemos explorar
                            livremente a ilha de Manhattan em toda sua extensão.
                            Apenas o visual nos surpreende, não por ser ainda
                            tão bonito quanto o título anterior, mas por
                            apresentar uma cidade coberta pela neve e
                            devidamente decorada para as festividades de fim de
                            ano. <br />
                            Se balançar para se deslocar por toda a extensão do
                            mapa continua sendo uma atividade até terapêutica,
                            de tão gostoso que é. Muitas vezes é preferível
                            atravessar toda a ilha de Manhattan se balançando a
                            usar as cômodas viagens rápidas, simplesmente pelo
                            prazer de viajar dessa forma pela cidade. O que muda
                            mesmo são as formas como interagimos com os
                            acontecimentos da metrópole.
                        </p>
                        <img src={spiderImg2} alt="" />
                    </section>
                    <section className="item-3">
                        <p>
                            Ganke é um amigo fiel de Miles, e para te ajudar ele
                            desenvolveu um aplicativo em que as pessoas de NY
                            podem entrar em contato diretamente com o herói. É
                            através deste aplicativo que temos acesso às missões
                            secundárias no game e também aos relatos de crimes
                            que estão acontecendo pela cidade. Essas atividades
                            rendem fichas que são usadas para realizar os
                            aprimoramentos dos equipamentos de Miles e também o
                            desbloqueio da maioria dos trajes que podem ser
                            usados pelo herói. <br />
                            Dentre as outras atividades também temos a coleta de
                            equipamentos que fornecem outro tipo de ficha para
                            aprimoramentos, programas de treinamento deixados
                            por Peter para Miles e atividades relacionadas a
                            outros personagens da trama principal do game.
                            Conforme avançamos na campanha, estas atividades vão
                            naturalmente sendo incorporadas ao cotidiano do
                            Spider, rendendo fichas e pontos de experiência que
                            premiam o jogador com pontos a serem atribuídos em
                            sua árvore de habilidades.
                        </p>
                        <img src={spiderImg3} alt="" />
                    </section>
                </div>
                <a
                    href="https://www.playstation.com/pt-br/games/marvels-spider-man-miles-morales/"
                    id="button-story"
                    className="btn"
                    target="_blank"
                    rel="noreferrer">
                    PRE-ORDER NOW
                </a>
            </div>
        </>
    )
}
