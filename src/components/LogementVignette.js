import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function LogementVignette() {
    const [logements, setLogements] = useState([])
    const [isScreenWider800, setIsScreenWider800] = useState(
        window.innerWidth > 800,
    )
    const [isScreenWider700, setIsScreenWider700] = useState(
      window.innerWidth > 700,
  )
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/logements.json')
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                const data = await response.json()
                setLogements(data.logements)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWider800(window.innerWidth > 800)
            setIsScreenWider700(window.innerWidth > 700)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            {isScreenWider800 && !isScreenWider700 ? (
                <>
                    {logements.map((logement) => (
                        <Link to={`/logement/${logement.id}`} key={logement.id}>
                            <div className="logement-card">
                                {' '}
                                <img src={logement.cover} alt="" />
                                <span className="logement-title">
                                    {logement.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </>
            ) : (
                <>
                    {logements.map((logement) => (
                        <Link to={`/logement/${logement.id}`} key={logement.id}>
                            <div className="logement-card">
                                {' '}
                                <img src={logement.cover} alt="" />
                                <span className="logement-title">
                                    {logement.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </>
            )}
        </>
    )
}

export default LogementVignette
