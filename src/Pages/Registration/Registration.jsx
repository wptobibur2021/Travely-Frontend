import './Registration.css'
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaLock, FaEnvelope, FaUser} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import useNotify from '../../Hooks/useNotify'
import { useLocation, useHistory } from 'react-router'
export default function Registration() {
    const {successNotify} = useNotify()
    const location = useLocation()
    const redrirect_url = location.state?.from || '/'
    const history = useHistory()
    const {setDisplayName, newRegistration, emailHandle, passwordHandle,fullNameHandle } = useAuth();

    const newUser = e =>{
        e.preventDefault()
        newRegistration()
        .then(result =>{
            setDisplayName()
            history.push(redrirect_url)
            successNotify()
        }).catch(error =>{
            console.dir(error.message)
        })
    }

    return (
            <div className="loginPageSection" style={{ 
                backgroundImage: `url('./image/destination/destination-1-4.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}>
                <div className="loginPage">
                    <Container>
                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
                                <div className="loginFrom">
                                    <Form onSubmit={newUser}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Full Name <span className="requiredColor">*</span></Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text><FaUser/></InputGroup.Text>
                                                <FormControl onBlur={fullNameHandle} type="text" placeholder="Full Name" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address <span className="requiredColor">*</span></Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text><FaEnvelope/></InputGroup.Text>
                                                <FormControl type="email" onBlur={passwordHandle} placeholder="Email" />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password <span className="requiredColor">*</span></Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text><FaLock/></InputGroup.Text>
                                                <FormControl type='password' placeholder="Password" onBlur={emailHandle}/>
                                            </InputGroup>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Registration
                                        </Button>
                                    </Form>
                                    <NavLink to='/login'>Have a all ready account?</NavLink>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div> 
            </div>
    )
}
