import Footer from '../../Footer'
import Banner from '../../Banner'
import UnderBannerImg from '../../UnderBannerImg'
import CardsSection from '../../CardsSection'
import DataJson from '../../DataJson'
function Home() {
    return (
        <div style={{ overflow: 'hidden'}}>
            <Banner />
            <UnderBannerImg />
            <CardsSection>
            <DataJson />
            </CardsSection>
            <Footer />
        </div>
    )
}

export default Home
