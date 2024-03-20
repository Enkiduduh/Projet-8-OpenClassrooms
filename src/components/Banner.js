import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Banner() {
    const [isScreenWider, setIsScreenWider] = useState(window.innerWidth > 480)
    const location = useLocation()
    const currentPage = location.pathname
    console.log(currentPage)

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWider(window.innerWidth > 480)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="banner">
            {isScreenWider ? (
                <>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="banner-text-wrapper">
                        <div>
                            {currentPage === '/home' ? (
                                <Link to="/home">
                                    <span
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        Accueuil
                                    </span>
                                </Link>
                            ) : (
                                <Link to="/home">
                                    <span>Accueuil</span>
                                </Link>
                            )}
                        </div>
                        {currentPage === '/about' ? (
                            <Link to="/about">
                                <span style={{ textDecoration: 'underline' }}>
                                    A propos
                                </span>
                            </Link>
                        ) : (
                            <Link to="/about">
                                <span>A propos</span>
                            </Link>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="banner-text-wrapper">
                        <div>
                            {currentPage === '/home' ? (
                                <Link to="/home">
                                    <span
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        ACCUEUIL
                                    </span>
                                </Link>
                            ) : (
                                <Link to="/home">
                                    <span>ACCUEUIL</span>
                                </Link>
                            )}
                        </div>
                        <div>
                            {currentPage === '/about' ? (
                                <Link to="/about">
                                    <span
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        A PROPOS
                                    </span>
                                </Link>
                            ) : (
                                <Link to="/about">
                                    <span>A PROPOS</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Banner
