import logo from '../assets/logo.png'

function Banner() {
    return (
        <div className="banner">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="banner-text-wrapper">
                <div>
                    <span>Accueil</span>
                </div>
                <div>
                    <span>A propos</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
