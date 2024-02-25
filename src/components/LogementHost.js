import { useState, useEffect } from 'react'

function LogementHost({ name, picture }) {
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
                <div className="infos-host">
                    <span className="name">{name}</span>
                    <div className="img">
                        <img src={picture} alt={name} />
                    </div>
                </div>
            ) : (
                <div className="infos-host">
                    <span className="name">{name}</span>
                    <div className="img">
                        <img src={picture} alt={name} />
                    </div>
                </div>
            )}
        </>
    )
}

export default LogementHost
