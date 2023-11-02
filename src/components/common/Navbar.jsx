import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavbarUI() {

    const navbarStyle = {
        backgroundColor: 'white'
    };

    const centerAlignStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const [isNavbarSticky, setIsNavbarSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const shouldStick = window.scrollY > 0;
            setIsNavbarSticky(shouldStick);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const addSpaceBetweenCharacters = (word) => {
        return word.split('').map((char, index) => (
            <span key={index}>{char}&nbsp;</span>
        ));
    };

    const companyName = 'UNIQUEB2B';

    return (
        <div>
            <Navbar
                expand="lg"
                style={navbarStyle}
                className={`navbar-container ${isNavbarSticky ? 'sticky-navbar' : ''}`} >
                <Container>
                    <Navbar.Brand as={Link} to='/home'>
                        {addSpaceBetweenCharacters(companyName)}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={centerAlignStyle}>
                            <Nav.Link className='nav-home'><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link className='nav-contact'><Link to='/contact'>Contact</Link></Nav.Link>
                            <NavDropdown title="Know More" id="basic-nav-dropdown" className='nav-about'>
                                <NavDropdown.Item className="nav-dropdown-link">
                                    <Link to='/about'>About</Link></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/about">
                                    What We Do
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarUI;  