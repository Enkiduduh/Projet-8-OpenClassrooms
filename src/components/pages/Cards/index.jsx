import Footer from '../../Footer'
import Banner from '../../Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Cards() {
    return (
        <div className="container">
            <Banner />
            <div className="cards-container">
                <img src="" alt="" />
                <div className="card-infos">
                    <div>
                        <h2>
                            It is a long established fact that a reader will be
                            distracted
                        </h2>
                        <span>There are many variations</span>
                    </div>
                    <div>
                        <span>Dolores Valksjo</span>
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="card-tags-and-rating">
                    <div className="card-tags">
                      <span className="tags"></span>
                      <span className="tags"></span>
                      {/* ...And more */}
                    </div>
                    <div className="card-rating">
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                          {/* ...And up to 5 red stars according to rating*/}
                    </div>
                </div>

                <div className="card-collapse">
                    <div className="card-collapse-left"></div>
                    <div className="card-collapse-right"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cards
