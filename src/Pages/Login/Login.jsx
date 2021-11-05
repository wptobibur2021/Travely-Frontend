import './Login.css'
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaLock, FaEnvelope, FaFacebookF, FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import useAuth from  '../../Hooks/useAuth'
import { useLocation, useHistory } from 'react-router'
import useNotify from '../../Hooks/useNotify'
export default function Login() {
    const {successNotify} = useNotify()
    const location = useLocation()
    const redrirect_url = location.state?.from || '/'
    const {setUser, googleSineIn, facebookSineIn, emailAndPasswordSineIn, emailHandle, passwordHandle} = useAuth()
    const history = useHistory()
    //Google Handle
    const sineInHandle = (props) =>{
        if(props === 'google'){
            googleSineIn()
                .then(result =>{
                    const user = result.user
                    setUser(user)
                    successNotify()
                    history.push(redrirect_url)
                }).catch(error =>{
                console.dir(error.message)
            })
        }

        if(props === 'facebook'){
            facebookSineIn()
            .then(result =>{
                const user = result.user
                setUser(user)
                successNotify()
                history.push(redrirect_url)
            }).catch(error =>{
                console.log(error.message)
            })
        }
    }

    // Sine in with email

    const sineInEmailPassword = e => {
        e.preventDefault()
        emailAndPasswordSineIn()
            .then(result =>{
                const user = result.user
                setUser(user)
                successNotify()
                history.push(redrirect_url)
            }).catch(error =>{
            console.log(error.message)
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
                                    <Form onSubmit={sineInEmailPassword}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address <span className="requiredColor">*</span></Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text><FaEnvelope/></InputGroup.Text>
                                                <FormControl type="email" onBlur={emailHandle} placeholder="Email" />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password <span className="requiredColor">*</span></Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text><FaLock/></InputGroup.Text>
                                                <FormControl type="password" onBlur={passwordHandle} placeholder="Password" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Login
                                        </Button>
                                    </Form>
                                    <NavLink to='/registration'>Do You have an account?</NavLink>
                                    <div className="diveder"></div>
                                    <div className="loginToAnother">
                                        <Button variant="primary loginIcon" onClick={()=>sineInHandle('google')}><FaGoogle/></Button>
                                        <Button variant="primary loginIcon" onClick={()=>sineInHandle('facebook')}><FaFacebookF/></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div> 
            </div>
    )
}
