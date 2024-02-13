import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Collapse({ str , text }) {
    const [windowDown, setWindowDown] = useState(false)

    return (
        <div className="container">
            <div className="collapse-container">
                <div>{str}</div>
                <div onClick={() => setWindowDown(!windowDown)}>
                    <FontAwesomeIcon
                        icon={windowDown ? faChevronUp : faChevronDown}
                    />
                </div>
            </div>
            <div className={`collapse-window ${windowDown && 'window-down'}`}>
                <div
                    className={`window-content ${windowDown ? 'd-block' : 'd-none'}`}
                >
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Collapse
