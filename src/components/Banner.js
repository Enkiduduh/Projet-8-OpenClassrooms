import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Banner() {
    return (
        <div className="banner">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="banner-text-wrapper">
                <div>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </div>
                <div>
                    <Link to="/about">
                        <span>A propos</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
