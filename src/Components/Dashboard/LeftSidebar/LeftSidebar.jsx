import './LeftSidebar.css'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function LeftSidebar() {
    return ( 
        <Col sm={3} md={3}>
            <div className="leftSidebarMeu">
                <ul className="leftMenu">
                    <li className="leftMenuItem"><NavLink to='/dashboard/add-tour'>Add Tour</NavLink></li>
                </ul>
            </div>
        </Col>
    )
}
