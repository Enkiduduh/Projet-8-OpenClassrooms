import logo from '../assets/logo_white.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo-wrapper">
                <img className="footer-logo" src={logo} alt="Logo Kasa" />
            </div>
            <div>
                <span className="footer-text">
                    © 2020 Kasa. All rights reserved
                </span>
            </div>
        </div>
    )
}

export default Footer
