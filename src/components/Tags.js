import React, { useState, useEffect } from 'react'

function Tags({ tags }) {
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
                    <ul className="card-tags">
                        {tags.map((tag, index) => (
                            <li className="tags" key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                    <div className="card-tags-480">
                        {tags.map((tag, index) => (
                            <span className="tags" key={index}>
                                {tag}
                            </span>
                        ))}
                    </div>
            )}
        </>
    )
}

export default Tags
