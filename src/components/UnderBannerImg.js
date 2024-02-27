import React, { useState, useEffect } from 'react'

function UnderBannerImg() {
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
        <div className="UnderBannerImg-container">
            <div className="UnderBannerImg-bg">
                <div className="UnderBannerImg-overlay"></div>
                {isScreenWider ? (
                    <div className="UnderBannerImg-title">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                ) : (
                    <div className="UnderBannerImg-title">
                        <h1>Chez vous,</h1>
                        <h1>partout et ailleurs</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UnderBannerImg
