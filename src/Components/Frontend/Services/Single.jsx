import React from 'react';
import {Card, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Single = ({tour}) => {
    console.log(tour)
    return (
        <Col md={4} className="mb-3">
            <div className="singleService">
                <Card>
                    <Card.Img className="serviceImg" variant="top" src={tour.photo} />
                    <Card.Body>
                        <Card.Title>{tour.name}</Card.Title>
                        <Card.Text>
                            <p className="rating">{tour.rating}</p>
                            <p className="price"><span className="priceText">${tour.price}</span>/Per Person</p>
                        </Card.Text>
                        <NavLink to={`/tours/details/${tour._id}`} className="morebtn">Details</NavLink>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default Single;