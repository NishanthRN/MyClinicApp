import React from 'react'
import { Link } from 'react-router-dom'
import DashHeader from '../../components/DashHeader'
import style from '../../App.css'
import img from '../../images/ayd2.jpg'
import DashFooter from '../../components/DashFooter'

const Help = () => {
    return (
        <>
            <DashHeader />
            <section className={style.info}>
                <div className={style.helpa}>
                    <img
                        src={img}
                        alt="ayd"
                        height={400}
                        width={420}
                    />
                    <p>
                        Ayurveda, known as the “Sister Science” to yoga, is an ancient science that is holistic in nature. Having been around for over 5,000 years, the main focus of Ayurveda is to focus on your life in-between the emotional and physical self. One of the main beliefs is that the food we eat effects our overall wellbeing, and can make us elated or miserable. Essentially, we can be full of energy and vitality, or lethargic and run-down based on what we put into our bodies. This is known as the Sattvic approach.
                    </p>


                    <b>WHAT IS SATTVIC?</b><br />
                    <p>
                        First, Sattvic translates to ‘pure essence’ in Sanskrit. Sattvic is a diet based on foods recommended within Ayurveda, and is one of the purest diets you can adopt and supports you in being your best self. This diet is designed to be holistic in nature, meaning it nurtures your mind, body, and soul, and therefore is a great support for your yoga and meditation practice.

                        Understanding that food is the fuel for our body, an additional benefit that coincides with this ancient practice is the clarity of the mind it gives us. Ayurvedic practitioners often report they can concentrate better, sleep better and feel less anxious overall. Here are 10 benefits of Ayurvedic Medicine and the affects you'll see on a daily basis.
                    </p>
                </div>
                <br />
                <section className={style.button}>
                    <center>
                        <Link to="/tteam" className="btn btn-light btn-outline-dark">MEET OUR TEAM</Link>
                    </center>
                </section>
            </section>
            <DashFooter />
        </>
    )
}

export default Help