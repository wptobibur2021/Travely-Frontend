import React from 'react'
import TopBar from '../TopBar/TopBar'
import { Container, Row,  } from 'react-bootstrap'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
export default function PageLayout({children}) {
    return (
        <div className="mainContainer">
            <TopBar></TopBar>
            <div className="dashboardContainer">
                <div className="dashboardBoy">
                    <Container fluid>
                        <Row>
                            <LeftSidebar></LeftSidebar>
                            {children}
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
