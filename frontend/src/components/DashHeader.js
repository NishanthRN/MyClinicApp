import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/icon.ico'
import style from "./dash.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"


const DashHeader = () => {
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)
    // const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(date)


    const content = (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={icon} alt="logo" width={40} height={40} />
                <a className="navbar-brand" href="#">
                    My Clinic
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/dash" className="nav-link">Home</Link>

                            {/* <a className="nav-link" Link to>
                                Home
                            </a> */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Personal info
                            </a>
                        </li> */}

                        {/* <li className="nav-item">
                            <a className="nav-link" href="prescription.html">
                                Prescription
                            </a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Admin
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/profile" className="dropdown-item">Profile <FontAwesomeIcon icon={faUser} /></Link>

                                </li>
                                <li>
                                    <Link to="/help" className="dropdown-item">Help <FontAwesomeIcon icon={faCircleInfo} /></Link>

                                </li>
                                <li>
                                    {/* <a className="dropdown-item" href="login.html">
                                        Logout
                                    </a> */}
                                    <Link to="/" className="dropdown-item">Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>

                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <p>{today}</p>

        </nav >
    )
    return content
}

export default DashHeader