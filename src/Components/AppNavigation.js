import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from './utils/Icon'
import { Link } from 'react-router-dom';


const PageNavigation = (props) => {

    return (
        <Container fluid={true}>
            <Row className="mt-3">
                <Col xs={3}>
                    <Link to='/home'>
                        <Icon icon='home' size="medium"/>
                    </Link>
                </Col>
                <Col className="text-center mt-2">
                    <ul>
                    <Link to='/cupcakes'>
                        <Icon icon='cupcake'/>
                        <li className="nav-options">Cupcakes</li>
                    </Link>
                    <Link to='/cookies'>
                        <Icon icon='cookie'/>
                        <li className="nav-options">Cookies</li>
                    </Link>
                    <Link to='/about'>
                        <Icon icon='about'/>
                        <li className="nav-options">About</li>
                    </Link>
                    <Link to='/contact'>
                        <Icon icon='contact'/>
                        <li className="nav-options">Contact</li>
                    </Link>
                    </ul>
                </Col>
                <Col xs={3} className="text-right">
                    <Link to='/cart'>
                        <span>{props.itemsInShop === 0 ? "" : props.itemsInShop}</span>
                        <Icon icon='checkout' size="medium"/>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default PageNavigation
