import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, 
    MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'gatsby';

const Navbar = () => {
    const [collapse, setCollapse] = useState(false);

    const onClick = () => setCollapse(!collapse);

    const activeStyle = {
        textDecoration: `underline`,
        textUnderlinePosition: `under`,
    }

    return (
        <>
        <Router>
            <header>
                <MDBNavbar light expand="md">
                    <MDBContainer fluid>
                    <MDBNavbarBrand href="/">
                        <h2 className="h2-responsive m-0">MDB Starter</h2>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={onClick} />
                    <MDBCollapse isOpen={collapse} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem className="mx-lg-4 mx-md-4">
                                <span>
                                    <Link to="/" className="h4-responsive black-text" activeStyle={activeStyle}>
                                        Home
                                    </Link>
                                </span>
                            </MDBNavItem>
                            <MDBNavItem className="mx-lg-4 mx-md-4">
                                <span>
                                    <Link to="/about" className="h4-responsive black-text" activeStyle={activeStyle}>
                                        About
                                    </Link>
                                </span>
                            </MDBNavItem>
                            <MDBNavItem className="mx-lg-4 mx-md-4">
                                <span>
                                    <Link to="/elements" className="h4-responsive black-text" activeStyle={activeStyle}>
                                        Elements
                                    </Link>
                                </span>
                            </MDBNavItem>
                            <MDBNavItem className="ml-lg-4 ml-md-4">
                                <span>
                                    <Link to="/contact" className="h4-responsive black-text" activeStyle={activeStyle}>
                                        Contact
                                    </Link>
                                </span>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </header>
        </Router>
        </>
    );
  }

export default Navbar;