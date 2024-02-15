import Footer from '../../Footer'
import Banner from '../../Banner'
import UnderBannerImg from '../../UnderBannerImg'
import LogementsSection from '../../LogementsSection'
import LogementVignette from '../../LogementVignette'
function Home() {
    return (
        <div style={{ overflow: 'hidden'}}>
            <Banner />
            <UnderBannerImg />
            <LogementsSection>
            <LogementVignette />
            </LogementsSection>
            <Footer />
        </div>
    )
}

export default Home
