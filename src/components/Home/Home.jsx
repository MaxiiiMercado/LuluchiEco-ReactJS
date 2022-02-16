import React from 'react'
import './home.scss'
import 'animate.css';

const Home = () => {
    return (
        <>
            <div class="bgWelcome"></div>

            <main id="containerInicio" class="animate__animated animate__fadeInUp animate__delay-2s">
                <section class="welcome">
                    <h1>Bienvenidos a Luluchi Eco</h1>
                    <h2><i class="fas fa-shopping-bag"></i>Tienda Sustentable <i class="fas fa-shopping-bag"></i></h2>
                    <ul>
                        <li>ECOLOGÍA</li>
                        <li>RECICLAJE</li>
                        <li>SALUD</li>
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Home