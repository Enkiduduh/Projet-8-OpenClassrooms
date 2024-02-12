import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Collapse({ str }) {
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
                    className={`window-content ${windowDown ? 'lightgreen' : 'lightcyan'}`}
                >
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Collapse
