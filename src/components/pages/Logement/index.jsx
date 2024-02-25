import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Footer from '../../Footer'
import Banner from '../../Banner'
import Rating from '../../Rating'
import Tags from '../../Tags'
import LogementCover from '../../LogementCover'
import LogementLocation from '../../LogementLocation'
import LogementHost from '../../LogementHost'
import CollapseInLogement from '../../CollapseInLogement'

function CardsPage() {
    const [logements, setLogements] = useState([])

    const [isScreenWider, setIsScreenWider] = useState(window.innerWidth > 480);

    useEffect(() => {
      const handleResize = () => {
          setIsScreenWider(window.innerWidth > 480);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);


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
        <>
            {isScreenWider ? (
                <div className="container">
                    <Banner />
                    {logement && (
                        <div className="cards-container">
                            <LogementCover
                                arrayOfPictures={logement.pictures}
                            />
                            <div className="card-infos">
                                <LogementLocation
                                    title={logement.title}
                                    location={logement.location}
                                />
                                <LogementHost
                                    name={logement.host.name}
                                    picture={logement.host.picture}
                                />
                            </div>
                            <div className="card-tags-and-rating">
                                <Tags tags={logement.tags} />
                                <Rating rating={logement.rating} />
                            </div>

                            <div className="card-collapse">
                                <CollapseInLogement
                                    str="Description"
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
            ) : (
                <div className="container">
                    <Banner />
                    {logement && (
                        <div className="cards-container">
                            <LogementCover
                                arrayOfPictures={logement.pictures}
                            />
                            <div className="card-infos">
                                <LogementLocation
                                    title={logement.title}
                                    location={logement.location}
                                />
                            </div>
                            <div className="card-tags">
                                <Tags tags={logement.tags} />
                            </div>
                            <div className="card-host-and-rating">
                                <Rating rating={logement.rating} />
                                <LogementHost
                                    name={logement.host.name}
                                    picture={logement.host.picture}
                                />
                            </div>
                            <div className="card-collapse">
                                <CollapseInLogement
                                    str="Description"
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
            )}
        </>
    )
}

export default CardsPage
