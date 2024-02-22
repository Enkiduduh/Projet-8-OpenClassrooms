function UnderBannerImg() {
  const isScreenWider = window.innerWidth > 480;

  return (
      <div className="UnderBannerImg-container">
          <div className="UnderBannerImg-bg">
              <div className="UnderBannerImg-overlay"></div>
              <div className="UnderBannerImg-title">
                  {isScreenWider ? (
                      <h1>Chez vous, partout et ailleurs</h1>
                  ) : (
                      <>
                          <h1>Chez vous,</h1>
                          <h1>partout et ailleurs</h1>
                      </>
                  )}
              </div>
          </div>
      </div>
  );
}

export default UnderBannerImg;
