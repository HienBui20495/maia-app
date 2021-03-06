import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap';
import '../Styles/Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    buidTopHeader() {
        let content =[];
        content.push(
            <div key="HeaderTop" className="header-top">
                <Grid>
                    <Row>
                        <Col lg={6} sm={6} xs={4}>
                        
                                <div className="pull-left">
                                        <span className="text-white">Language</span>
                                    
                                            <select className="language-select ml-5">
                                                <option value="0">Tiếng Việt</option>
                                                <option value="1">日本語</option>
                                                <option value="2">English</option>
                                              </select>
                                    
                                </div>
                        </Col>
                        <Col lg={6} sm={6} xs={8}  className="header-top-right no-padding">  
                            <a className="icon" href="#"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +84 28 3526 8875</a>
                            <a className="icon" href="#"> <i className="fas">FAX: +84 28 3526 8876</i></a>
                            <a className="icon" href="#"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> hr-info@asiem.asia</a> 
                        </Col>
                    </Row>
                </Grid>
            </div>
        
        )
        return content ;
    }
    render() {
        return (
            <div className="header">
                {this.buidTopHeader()}
                <Navbar inverse collapseOnSelect className="main-header">
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a className="scroll" href="#logo"><img src="images/Logo.png"/></a>
                            </Navbar.Brand>
                    <Navbar.Toggle />
                        </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} className="scroll" href="#about">
                            ABOUT
                            </NavItem>
                            <NavItem eventKey={2} className="scroll" href="#service">
                            SERVICE
                            </NavItem>
                            <NavDropdown className="scroll" href="#experience" eventKey={3} title="EXPERIENCE">
                            <MenuItem eventKey={3.1}>Electrical Design</MenuItem>
                            <MenuItem eventKey={3.2}>Mechanical Design</MenuItem>
                            <MenuItem eventKey={3.3}>Archhitecture Design</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Advertising Design</MenuItem>
                            </NavDropdown>
                            <NavItem className="scroll" href="#news" eventKey={1}>
                            LASTED NEWS
                            </NavItem>
                            <NavItem className="scroll" href="#contact" eventKey={1}>
                            CONTACT
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;