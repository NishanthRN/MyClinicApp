// import React from 'react'
// import { Router } from 'react-router-dom'
import { useState, useEffect } from 'react';
import img from '../../images/dhanvantri.jpg'
import style from './login.module.css'
import '../../App.css'
import { Navigate } from 'react-router-dom'

const Login = () => {
    // const userRef = useRef();
    //const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user || !pwd) {
            setErrMsg("PLEASE FILL IN ALL THE DETAILS")
            return
        }
        if (user !== "admin@gmail.com" || pwd !== "abc") {
            setErrMsg("UNAUTHORIZED USER")
            return
        }
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }


    return (
        <>
            {success ? (
                <Navigate replace to="/dash" />
            ) : (
                <section className={style.login}>
                    <div className={style.imgBx}>
                        <img src={img} />
                    </div>
                    <div className={style.contentBx}>
                        <div className={style.formBx}>
                            <h1>Dhanvantri Clinic</h1>
                            <h2>Login</h2>
                            <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>


                            <form onSubmit={handleSubmit}>
                                <div className={style.inputBx}>
                                    <span>Username</span>
                                    <input
                                        type="text"
                                        id="username"
                                        // required
                                        // ref={useRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        placeholder='Enter Username'
                                    />
                                </div>
                                <div className={style.inputBx}>
                                    <span>Password</span>
                                    <input
                                        type="password"
                                        id="password"
                                        // required
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        placeholder='Enter Password'
                                    />
                                </div>
                                {/* <div className={style.remember}>
                                    <label>
                                        <input type="checkbox" />
                                        Remember me
                                    </label>
                                </div> */}
                                <div className={style.inputBx}>
                                    <input type="submit" defaultValue="Sign in" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            )}
        </>
    )

}


export default Login