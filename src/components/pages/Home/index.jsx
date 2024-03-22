import Footer from '../../Footer'
import Banner from '../../Banner'
import UnderBannerImg from '../../UnderBannerImg'
import LogementsSection from '../../LogementsSection'
import LogementVignette from '../../LogementVignette'
function Home() {
    return (
        <>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
                <Banner />
                <UnderBannerImg />
                <LogementsSection>
                    <LogementVignette />
                </LogementsSection>
            </div>
            <Footer />
        </>
    )
}

export default Home
