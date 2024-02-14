import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function App() {
    const [logements, setLogements] = useState([])

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

    return (
        <>
            {logements.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id}>
                    <div className="logement-card">
                        <img
                            className="logement-img"
                            src={logement.cover}
                            alt={logement.title}
                        />
                        <span className="logement-title">{logement.title}</span>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default App
