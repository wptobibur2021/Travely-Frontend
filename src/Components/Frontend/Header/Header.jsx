import './Header.css'
import { Container, Row, Col,Navbar,Nav,NavDropdown,Button } from 'react-bootstrap';
import { NavLink, Link} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
import useNotify from  '../../../Hooks/useNotify'
import {useHistory} from 'react-router'
const Header = () =>{
    const {setUser, user, logOut} = useAuth();
    const history = useHistory()
    const {successNotify} = useNotify()
    console.log('User Info: ', user)
    // Logout Declaration
    const LogOut = () =>{
        logOut().then(res =>{
            setUser({})
            successNotify()
            history.push('/')
        })
    }
    return(
        <header className="headerSection">
            <div className="headerArea">
                <Container>
                    <Row>
                        <Col md={1}>
                            <div className="logo">
                                <Link to='/'><img className="logoImg" src="./image/logo.png" alt=""/></Link>
                            </div>
                        </Col>
                        <Col md={{ span:5, offset: 4 }}>
                            <div className="mainMenu">
                                <Navbar expand="lg">
                                    <Container fluid>
                                        <Navbar.Toggle aria-controls="navbarScroll" />
                                        <Navbar.Collapse id="navbarScroll">
                                        <Nav
                                            className="me-auto my-2 my-lg-0"
                                            style={{ maxHeight: '100px' }}
                                            navbarScroll
                                        >
                                            <NavLink to='/' className="nav-link">Home</NavLink>
                                            <NavLink to="/tours" className="nav-link">Tours</NavLink>
                                            <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
                                            {
                                                user?.email &&
                                                <NavDropdown title={user.displayName} id="navbarScrollingDropdown">
                                                    <NavLink to='/my-tours' className="dropdown-item">My Tour</NavLink>
                                                    <NavLink to='/dashboard/add-tour' className="dropdown-item">Add Tour</NavLink>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item onClick={LogOut}>
                                                        Logout
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            }
                                        </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </div>
                        </Col>
                        <Col md={2}>
                            {
                                user?.email ? <div className="profileinfo">
                                    <img className="profileImg" src={user.photoURL} alt="" />
                                </div> :
                                <div className="authHomeBtn">
                                    <NavLink to='/login' className="authBtn">Login</NavLink>
                                    <NavLink to='/registration' className="authBtn">Registration</NavLink>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>    
    )
}
export default Header;