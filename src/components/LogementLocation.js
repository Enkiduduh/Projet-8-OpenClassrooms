import { useState, useEffect } from 'react'

function LogementLocation({ title, location }) {
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
        <>
            {isScreenWider ? (
                <div>
                    <h2>{title}</h2>
                    <span>{location}</span>
                </div>
            ) : (
                <div className='location-span-wrapper'>
                    <span className='location-span1'>{title}</span>
                    <span className='location-span2'>{location}</span>
                </div>
            )}
        </>
    )
}

export default LogementLocation
