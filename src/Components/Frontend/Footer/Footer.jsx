import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaLocationArrow, FaPhoneVolume  } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className="footer-section-area">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="footer-widgets">
                            <h3 className="footer-title">Travely</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul className="footerWidgets">
                                <li className="widgetsItem"><FaMapMarkerAlt className="footerIcon"/> 1009 Whaley Lane Waukesha</li>
                                <li className="widgetsItem"><FaLocationArrow className="footerIcon"/> AdaWLee@jourrapide.com</li>
                                <li className="widgetsItem"><FaPhoneVolume className="footerIcon"/> 262-574-3472</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-widgets">
                            <h3 className="footer-title">Usefull Link</h3>
                            <ul className="linkItems">
                                <li className="item"><a href='https://dchtrust.org/'>DCHTRUST</a></li>
                                <li className="item"><a href='https://jewmch.com'>JEWMCH</a></li>
                                <li className="item"><a href='https://ad-din.org'>Addin</a></li>
                                <li className="item"><a href='http://akmmch.com'>AKMMCH</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-widgets">
                            <h3 className="footer-title">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-widgets">
                            <h3 className="footer-title">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
