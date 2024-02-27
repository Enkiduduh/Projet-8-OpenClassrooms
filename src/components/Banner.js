import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Banner() {
    const [isScreenWider, setIsScreenWider] = useState(window.innerWidth > 480)

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
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/about">
                                <span>A propos</span>
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="banner-text-wrapper">
                        <div>
                            <Link to="/">
                                <span>ACCUEUIL</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/about">
                                <span>A PROPOS</span>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Banner
