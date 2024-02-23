import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function LogementCover({ arrayOfPictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = arrayOfPictures || []

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        )
    }

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        )
    }
    const isScreenWider = window.innerWidth > 480

    return (
        <>
            {images.length > 0 && (
                <div>
                    {isScreenWider ? (
                        <div
                            className="card-img"
                            style={{
                                backgroundImage: `url(${images[currentIndex]})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className="chevronLeft"
                                onClick={goToPreviousSlide}
                            />
                            <span className="counter">
                                {' '}
                                {`${currentIndex + 1}`}/{images.length}
                            </span>
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="chevronRight"
                                onClick={goToNextSlide}
                            />
                        </div>
                    ) : (
                        <div
                            className="card-img"
                            style={{
                                backgroundImage: `url(${images[currentIndex]})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className="chevronLeft"
                                onClick={goToPreviousSlide}
                            />
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="chevronRight"
                                onClick={goToNextSlide}
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default LogementCover
