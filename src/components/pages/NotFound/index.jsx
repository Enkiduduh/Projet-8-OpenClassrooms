import React, { useState, useEffect } from 'react'
import Footer from '../../Footer'
import Banner from '../../Banner'

function NotFound() {
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
        <div className="container">
            <Banner />
            {isScreenWider ? (
                <div className="notfound-infos">
                    <p className="error">404</p>
                    <p className="message">
                        Oups! La page que vous demandez n'existe pas.
                    </p>
                    <a className="link" href="../">
                        Retourner sur la page d'accueuil
                    </a>
                </div>
            ) : (
                <div className="notfound-infos">
                    <p className="error">404</p>
                    <p className="message">
                        Oups! La page que vous demandez n'existe pas.
                    </p>
                    <a className="link" href="../">
                        Retourner sur la page d'accueuil
                    </a>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default NotFound
