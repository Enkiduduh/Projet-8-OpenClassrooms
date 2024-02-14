import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

function Rating({ rating }) {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const coloredStars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                coloredStars.push(<FontAwesomeIcon key={i} icon={faStar} className="star star-colored" />);
            } else {
                coloredStars.push(<FontAwesomeIcon key={i} icon={faStar} className="star" />);
            }
        }
        setStars(coloredStars);
    }, [rating]);

    return (
        <div className="card-rating">
            {stars}
        </div>
    );
}

export default Rating;
