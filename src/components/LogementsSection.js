import React, { useState, useEffect } from 'react'

function LogementsSection({ children }) {
    const [isScreenWider480, setIsScreenWider480] = useState(
        window.innerWidth > 480,
    )
    const [isScreenWider700, setIsScreenWider700] = useState(
      window.innerWidth > 700,
  )
    const [isScreenWider1140, setIsScreenWider1140] = useState(
        window.innerWidth > 1140,
    )
    const [isScreenWider800, setIsScreenWider800] = useState(
        window.innerWidth > 800,
    )

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWider480(window.innerWidth > 480)
            setIsScreenWider700(window.innerWidth > 700)
            setIsScreenWider800(window.innerWidth > 800)
            setIsScreenWider1140(window.innerWidth > 1140)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            {isScreenWider480 && !isScreenWider700 && !isScreenWider800 && !isScreenWider1140 ? (
                <div className="card-section-container">{children}</div>
            ) : (
                <div className="card-section-container">{children}</div>
            )}
        </>
    )
}

export default LogementsSection
