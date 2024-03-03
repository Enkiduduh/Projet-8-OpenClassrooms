import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function Collapse({ str, text }) {
    const [windowDown, setWindowDown] = useState(false)
    const [isScreenWider480, setIsScreenWider480] = useState(window.innerWidth > 480)
    const [isScreenWider1140, setIsScreenWider1140] = useState(window.innerWidth > 1140)

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWider480(window.innerWidth > 480)
            setIsScreenWider1140(window.innerWidth > 1140)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)

        }
    }, [])

    return (
        <div className="container">
            {(isScreenWider480 && !isScreenWider1140) ? (
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
