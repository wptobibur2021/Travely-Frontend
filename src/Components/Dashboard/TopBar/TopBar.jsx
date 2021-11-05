import './TopBar.css'
import { Container, Col, Row,  } from 'react-bootstrap'
export default function TopBar() {
    return (
        <header className="headerSection mb-3">
            <Container fluid>
                <Row>
                    <Col md={3} className="text-center">
                        <h1>Dashboard</h1>
                    </Col>
                    <Col md={{ span:4, offset: 5 }} className="text-right userInfo">
                        <span className="userName">Md Tobibur Rohman</span>
                        <img className="profileImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Dashboard"/>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
