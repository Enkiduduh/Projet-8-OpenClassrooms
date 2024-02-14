import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Footer from '../../Footer'
import Banner from '../../Banner'
import Rating from '../../Rating'
import CollapseInLogement from '../../CollapseInLogement'


function CardsPage() {
    const [logements, setLogements] = useState([])

    const { id } = useParams()
    console.log({ id })

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

    const logement = logements.find((logement) => logement.id === id)
    console.log(logement)

    return (
        <div className="container">
            <Banner />
            {logement && (
                <div className="cards-container">
                    <div
                        className="card-img"
                        style={{
                            backgroundImage: `url(${logement.cover})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>
                    <div className="card-infos">
                        <div>
                            <h2>{logement.title}</h2>
                            <span>{logement.location}</span>
                        </div>
                        <div className="infos-host">
                            <span className="name">{logement.host.name}</span>
                            <div className="img">
                                <img src={logement.host.picture} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card-tags-and-rating">
                        <div className="card-tags">
                            <span className="tags">paris 10</span>
                            <span className="tags">Cozy</span>
                            {/* ...And more */}
                        </div>
                        <Rating rating={logement.rating}/>
                    </div>

                    <div className="card-collapse">
                        <CollapseInLogement
                            str="description"
                            text={logement.description}
                        />
                        <CollapseInLogement
                            str="Equipements"
                            text={logement.equipments}
                        />
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default CardsPage
