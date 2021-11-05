import PageLayout from "../../Components/Frontend/PageLayout/PageLayout";
import { Carousel, Container, Row, Col,Image } from "react-bootstrap";
import { FaClock,FaUserAlt,FaPlane,FaMapMarkerAlt } from 'react-icons/fa';
import './Tours.css'
import TourBooking from "./TourBooking";
import {  useParams } from 'react-router';
import {useEffect, useState} from "react";
import axios from "axios";
const Details = () =>{
    const {id} = useParams()
    const [tour, setTour] = useState();
    const viewUrl = `http://localhost:8000/tours/details/${id}`;
    console.log('Single ID:', viewUrl)
    useEffect(()=>{
        axios.get(viewUrl).then(res=>{
            setTour(res.data)
        })
    },[])
    return(
        <PageLayout>
            <div className="detailsPageSections">
                <div className="detailsSlider">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="tourSlider"
                                src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="tourSlider"
                                src="https://images.pexels.com/photos/5615795/pexels-photo-5615795.jpeg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="tourSlider"
                                src="https://images.pexels.com/photos/4913822/pexels-photo-4913822.jpeg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="tourDetailsSections">
                    <div className="tourInfoDetails">
                        <Container fluid>
                            <Row>
                                <Col md={4}>
                                    <div className="tourName">
                                        <h1>{tour?.name}</h1>
                                        <p><span>${tour?.price}</span> /- Per Person</p>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div className="tourIconInfo">
                                        <FaClock className="iconTour"/>
                                        <div className="tourInfoText">
                                            <h6>Duration</h6>
                                            <h3>3 Days</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div className="tourIconInfo">
                                        <FaUserAlt className="iconTour"/>
                                        <div className="tourInfoText">
                                            <h6>Duration</h6>
                                            <h3>3 Days</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div className="tourIconInfo">
                                        <FaPlane className="iconTour"/>
                                        <div className="tourInfoText">
                                            <h6>Duration</h6>
                                            <h3>3 Days</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div className="tourIconInfo">
                                        <FaMapMarkerAlt className="iconTour"/>
                                        <div className="tourInfoText">
                                            <h6>Duration</h6>
                                            <h3>3 Days</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="tourOverview">
                        <Container fluid>
                            <Row>
                                <Col md={8}>
                                    <div className="tourDetails">
                                        <h2>Tour Overview</h2>
                                        <p>{tour?.desc}</p>
                                        <Image src={tour?.photo} fluid />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <TourBooking tour={tour?._id}></TourBooking>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
export default Details;