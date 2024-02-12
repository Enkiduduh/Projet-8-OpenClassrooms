import Footer from '../../Footer'
import Banner from '../../Banner'
import BannerImgAbout from '../../BannerImgAbout'
import Collapse from '../../Collapse'

function About() {
    return (
        <div className="container">
            <Banner />
            <BannerImgAbout />
            <p>About page</p>
            <Collapse str="Equipement" />
            <Footer />
        </div>
    )
}

export default About
