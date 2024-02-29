import React, { useState, useEffect } from 'react'

function BannerImgAbout() {
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
                <div className="BannerImgAbout-container">
                    <div className="BannerImgAbout-img"></div>
                </div>
            ) : (
                <div className="BannerImgAbout-container">
                    <div className="BannerImgAbout-img"></div>
                </div>
            )}
        </>
    )
}

export default BannerImgAbout
