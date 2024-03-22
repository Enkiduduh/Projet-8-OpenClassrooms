import Footer from '../../Footer'
import Banner from '../../Banner'
import BannerImgAbout from '../../BannerImgAbout'
import Collapse from '../../Collapse'

function About() {
    const text_1 = `Les annonces postées sur Kasa garantissent une fiabilité totale.
        Les photos sont conformes aux logements,
        et toutes les informations sont régulièrement
        vérifiées par nos équipes.`
    const text_2 = `La bienveillance fait partie des valeurs fondatrices de Kasa.
        Tout comportement discriminatoire ou de perturbation
        du voisinage entraînera une exclusion de notre plateforme.`
    const text_3 = `La bienveillance fait partie des valeurs fondatrices de Kasa.
        Tout comportement discriminatoire ou de perturbation
        du voisinage entraînera une exclusion de notre plateforme.`
    const text_4 = `La sécurité dest la priorité sur Kasa.
        Aussi bien pour nos hôtes que pour les voyageurs,
        chaque logement correspond aux critères de sécurité établis par nos services.
        En laisssant une notre aussi bien à l'hôte qu'au locataire,
        cela permet à nos équipes de vérifier que les standards sont bien respectés.
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
    return (
        <>
            <div className="container">
                <Banner />
                <BannerImgAbout />
                <Collapse str="Fiabilité" text={text_1} />
                <Collapse str="Respect" text={text_2} />
                <Collapse str="Service" text={text_3} />
                <Collapse str="Sécurité" text={text_4} />
                <div className="footer-about">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default About
