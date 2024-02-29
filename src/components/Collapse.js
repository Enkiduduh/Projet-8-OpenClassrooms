import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function Collapse({ str, text }) {
    const [windowDown, setWindowDown] = useState(false)
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
        <div className="container">
            {isScreenWider ? (
                <>
                    <div className="collapse-container">
                        <div>{str}</div>
                        <div onClick={() => setWindowDown(!windowDown)}>
                            <FontAwesomeIcon
                                icon={windowDown ? faChevronUp : faChevronDown}
                            />
                        </div>
                    </div>
                    <div
                        className={`collapse-window ${windowDown && 'window-down'}`}
                    >
                        <div
                            className={`window-content ${windowDown ? 'd-block' : 'd-none'}`}
                        >
                            <p>{text}</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="collapse-container">
                        <div>{str}</div>
                        <div onClick={() => setWindowDown(!windowDown)}>
                            <FontAwesomeIcon
                                icon={windowDown ? faChevronUp : faChevronDown}
                            />
                        </div>
                    </div>
                    <div
                        className={`collapse-window ${windowDown && 'window-down'}`}
                    >
                        <div
                            className={`window-content ${windowDown ? 'd-block' : 'd-none'}`}
                        >
                            <p>{text}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Collapse
