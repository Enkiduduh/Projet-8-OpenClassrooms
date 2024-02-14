import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function CollapseInLogement({ str, text }) {
    const [windowDown, setWindowDown] = useState(false)

    function textOrArray(element) {
        if (Array.isArray(element)) {
          return element.map((e, index) => (
            <span key={index}>{e}</span>
        ));
    } else {
        return <span>{element}</span>;
    }
}

    return (
        <div className="container-cil">
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
                    <div className='collapse-text-or-array'>{textOrArray(text)}</div>
                </div>
            </div>
        </div>
    )
}

export default CollapseInLogement
