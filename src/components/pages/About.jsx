import React from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdbreact/dist/css/mdb.css';
import Container from 'react-bootstrap/esm/Container';
import Navbar from '../common/Navbar'
import NavbarUI from '../common/Navbar';
import Footer from '../common/Footer';
import Image from 'react-bootstrap/Image'




function About(props) {
    const { image } = props;
    return (
        <div>
             <div className={`upper-para`}>
                <p>Shop Wholesale Online. <a
                    href='#sign-up'
                    className='link-para'> Sign Up</a></p>
            </div>
            <div className='navbar-container'><NavbarUI /></div>
            <header className='masthead'>
                <div className="mt-5">
                    <div className=''>
                        <div className="page-heading text-center">
                            <h3
                                className="fw-bold d-flex justify-content-center"
                            >About
                                Us
                            </h3>
                            <Container>
                                <div className='mt-5 aboutdo'>
                                    <h1 className="text-center col-lg-12 col-d-sm-inline-flex mt-4">At UniqueB2B, We're
                                        empowering The local retailers to chase their Dreams.</h1>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </header>

            <section className="about-description">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 flex-column">
                            <Container className=' text-center'>
                                <h1 className="text-center mb-4">
                                    We Believe the future is Local
                                </h1>
                            </Container>
                            <p className=' text-center mt-4'>
                                Now more than ever, consumers are choosing to support local shops over big-box chains. There
                                are
                                millions of thriving small businesses, who
                                collectively represent a trillion dollar market. With our global community and the power of
                                technology, UniqueB2B is helping fuel the growth of entrepreneurs in India.
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={image} alt="Local-Store-Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;