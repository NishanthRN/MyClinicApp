import React from 'react'
import style from './dash.module.css'

const DashFooter = () => {
    return (
        <>
            <br />
            <br />
            <section className={style.footer}>
                <footer className="pt-3 mt-4 text-muted border-top">


                    <p>
                        <b>Dr. Pradeep Agnihotri</b>
                        <br />
                        <i>"Ayurveda is the science of life"</i><br />
                        © 2022
                        {/* <a href="mailto:doctorname@gmail.com">doctorname@gmail.com</a> */}
                    </p>
                </footer>
            </section>


        </>
    )
}

export default DashFooter