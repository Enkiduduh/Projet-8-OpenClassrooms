import Footer from '../../Footer'
import Banner from '../../Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Cards() {
    return (
        <div className="container">
            <Banner />
            <div className="cards-container">
                <div className="card-img">
                    <img src="" alt="" />
                </div>
                <div className="card-infos">
                    <div>
                        <h2>
                            Cozy Loft on the Canal Saint-Martin
                        </h2>
                        <span>Paris, Île-de-France</span>
                    </div>
                    <div className="infos-host">
                        <span className="name">Dolores Valksjo</span>
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

                <div className="card-tags-and-rating">
                    <div className="card-tags">
                        <span className="tags">paris 10</span>
                        <span className="tags">Cozy</span>
                        {/* ...And more */}
                    </div>
                    <div className="card-rating">
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        <FontAwesomeIcon icon={faStar} className="star" />
                        {/* ...And up to 5 red stars according to rating*/}
                    </div>
                </div>

                <div className="card-collapse">
                    <div className="card-collapse-left">
                        <div>Description</div><FontAwesomeIcon icon={faChevronUp} />
                    </div>
                    <div className="card-collapse-right">
                        <div>Equipements</div><FontAwesomeIcon icon={faChevronUp} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cards
