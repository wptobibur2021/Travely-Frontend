import './Services.css'
import { Container, Col, Row, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import Single from "./Single";
const Services = () =>{
    const [tours, setTours] = useState()
    useEffect(()=>{
        const url = "http://localhost:8000/all-tours";
        axios.get(url).then(res=>{
           setTours(res.data)
        })
    },[])
    return(
        <div className="serviceSectionContainer sections-padding">
            <div className="sectionTitleArea text-center sections-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="sectiosTitle">Our Propular Services</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="serviceSection">
                <Container>
                    <Row>
                        {
                            tours?.map((t) => <Single key={t._id} tour={t}></Single>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Services;