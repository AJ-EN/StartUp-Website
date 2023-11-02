import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';




function Header() {

    return (
        <div>
            <header
                id="header"
                className="vh-100">
                <div className="h-100 d-flex align-items-center carousel-inner">
                    <div className="text-center carousel-item active">
                        <h1
                            className="text-capitalize text-black fa-2x fw-bold">
                            Your one-stop Shop for Wholesale
                        </h1>
                        <p
                            className="text-uppercase py-2 fw-bold text-black">
                            Shop independent Brands, all in one place.
                        </p>
                        <div className="button-container">
                            <div>
                                <MDBBtn color='light' rippleColor='dark' className='btn-light sign-up bg-light'>
                                    Sign Up to Shop
                                </MDBBtn>
                            </div>
                            <div>
                                <MDBBtn color='light' rippleColor='dark' className='btn-light sell bg-light'>
                                Sell on UB2B
                                </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
            <Container id="features" className='border-b border-gray-400 border-solid h-20'>
                <div className="container mt-5">
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div>
                            <h3 className="fs-2 fw-bold">Flexible payment terms</h3>
                            <p className="font-mono">Buy now</p>
                        </div>
                        <div>
                            <h3 className="fs-2 fw-bold">Unique products
                                curated for your store</h3>
                            <p className='font-mono'>Discover brands with resonable price</p>
                        </div>
                        <div>
                            <h3 className="fs-2 fw-bold">Free returns on opening orders</h3>
                            <p className='font-mono'>
                                We'll give you a prepaid shipping label in case you'd like to send
                                products back.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <section id="description" className='bg-whitesmoke'>
                <div className="container mt-5">
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-4 mt-5 '>
                            <h1 className="fw-small fw-normal">
                                We Believe the future of retail is local in India.
                            </h1>
                        </div>
                        <div className='col-md-6 col-sm-12 mt-5 mb-5 '>
                            <p className="text-balck font-monospace fw-lighter ">
                                Our mission is to empower independent entrepreneurs to chase their
                                dreams. By simplifying the wholesale buying process and bringing
                                together independent brands and retailers from around the corner, we
                                strive to level the playing field for small businesses everywhere.
                            </p>
                            <a href="#about-us" className='link-dark'>About Us</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-container with-background">
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <h2 className="large-font text-center mb-4 mt-5">Ready to start ordering wholesale online?</h2>
                    <p className="small-font text-center mb-4">
                        Purchase wholesale merchandise your customers will love.
                    </p>
                    <button className="btn  btn-lg custom-button mb-5 ">Join Now</button>

                </div>
            </section>

        </div >
    );
}

export default Header;