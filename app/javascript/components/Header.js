import React, { Component } from "react"
import {
    Jumbotron,
    Container,
    Col,
    Row
} from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const signButtonWidth = {"width": "75px"}
    


        return(
            <div>
                <Jumbotron fluid>
                    <Container fluid>                        
                            <Row>
                            {logged_in &&
                                <Col className="d-flex justify-content-end text-center">
                                <a className="btn btn-primary btn-md d-flex justify-content-end" href={sign_out_route}>Sign Out</a>
                                </Col>
                            }
                            {!logged_in &&
                                <Col className="d-flex justify-content-end text-center">
                                    <a className="btn btn-primary btn-md d-flex justify-content-end" style={signButtonWidth} href={sign_in_route}>Sign In</a>
                                </Col>
                            }
                            </Row>                        
                            <h1 className="display-3" >Find your apartment now!</h1>
                            <Row>

                            </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    };

export default Header