import './TopPlaces.css'
import { Container,Row,Col} from 'react-bootstrap';
const TopPlace = () =>{
    return(
        <div className="topPlaceSections sections-padding">
            <div className="sectionTitleArea text-center sections-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="sectiosTitle">Go Exotic Places</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="topPlace">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="singleTopPlace">
                                <span className="topPlaceName">Bangladesh</span>
                                <img src="./image/destination/destination-1-1.png" className="topPlaceImg" alt="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="singleTopPlace">
                                <span className="topPlaceName">Bangladesh</span>
                                <img src="./image/destination/destination-1-2.png" className="topPlaceImg" alt="" />
                            </div>
                        </Col>
                        <Col md={3} className="mb-2">
                            <div className="singleTopPlace">
                                <span className="topPlaceName">Bangladesh</span>
                                <img src="./image/destination/destination-1-3.png" className="topPlaceImg" alt="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="singleTopPlace">
                                <span className="topPlaceName">Bangladesh</span>
                                <img src="./image/destination/destination-1-5.png" className="topPlaceImg" alt="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="singleTopPlace">
                                <span className="topPlaceName">Bangladesh</span>
                                <img src="./image/destination/destination-1-4.png" className="topPlaceImg" alt="" />
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default TopPlace;