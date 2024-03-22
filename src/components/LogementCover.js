import React, { useState, useEffect  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function LogementCover({ arrayOfPictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = arrayOfPictures || []
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

    return (
      <>
          {images.length > 0 && (
              <div>
                  {images.length === 1 ? (
                      <div
                          className="card-img"
                          style={{
                              backgroundImage: `url(${images[currentIndex]})`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                          }}
                      />
                  ) : (
<>
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
</>

                  )}

              </div>
          )}
      </>
  );

}

export default LogementCover
