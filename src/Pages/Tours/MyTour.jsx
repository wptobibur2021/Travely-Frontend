import './Tours.css';
import {Row, Col, Container, Table, Button} from "react-bootstrap";
import PageLayout from "../../Components/Frontend/PageLayout/PageLayout";
import {useEffect, useState} from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import {Link} from "react-router-dom";
import useNotify from '../../Hooks/useNotify'
const MyTour = () => {
    const {deleteNotify} = useNotify()
    const[tours, setTours] = useState()
    const {user} = useAuth();
    const url = `http://localhost:8000/my-tour/${user.uid}`
    console.log('User Url: ', url)
    //Get API
    useEffect(()=>{
        axios.get(url).then(res=>{
            setTours(res.data)
        })
    }, [])
    // Post API
    const removeTour = id =>{
        const url = `http://localhost:8000/my-tour/remove/${id}`
        axios.delete(url).then(res=>{
            const result = res.data
            if(result.deletedCount > 0){
                const updateList  = tours.filter((t) => t._id !==id)
                setTours(updateList)
                deleteNotify()
            }
        })
    }
    return (
        <PageLayout>
            <div className="myTourConainer">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="tourManagement">
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>where</th>
                                        <th>when</th>
                                        <th>Type</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        tours?.map((t)=>(
                                            <tr>
                                                <td>{t.where}</td>
                                                <td>{t.when}</td>
                                                <td>{t.type}</td>
                                                <td>
                                                    <Link className="btn btn-primary" to={`/tours/details/${t.tourid}`}>View</Link>
                                                    <Button clasName="ml-2" onClick={()=>removeTour(t._id)}>Remove</Button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h1>Recent Tour</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </PageLayout>
    );
};

export default MyTour;