import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function CollapseInLogement({ str, text }) {
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

    function textOrArray(element) {
        if (Array.isArray(element)) {
            return element.map((e, index) => <span key={index}>{e}</span>)
        } else {
            return <span>{element}</span>
        }
    }

    return (
        <div className="container-cil">
            {isScreenWider ? (
                <>
                    <div className="collapse-container">
                        <div>{str}</div>
                        <div onClick={() => setWindowDown(!windowDown)}>
                            <FontAwesomeIcon
                                icon={windowDown ? faChevronDown : faChevronUp}
                            />
                        </div>
                    </div>
                    <div
                        className={`collapse-window ${windowDown && 'window-down'}`}
                    >
                        <div
                            className={`window-content ${windowDown ? 'd-block' : 'd-none'}`}
                        >
                            <div className="collapse-text-or-array">
                                {textOrArray(text)}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="collapse-container">
                        <div>{str}</div>
                        <div onClick={() => setWindowDown(!windowDown)}>
                            <FontAwesomeIcon
                                icon={windowDown ? faChevronDown : faChevronUp}
                            />
                        </div>
                    </div>
                    <div
                        className={`collapse-window ${windowDown && 'window-down'}`}
                    >
                        <div
                            className={`window-content ${windowDown ? 'd-block' : 'd-none'}`}
                        >
                            <div className="collapse-text-or-array">
                                {textOrArray(text)}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CollapseInLogement
