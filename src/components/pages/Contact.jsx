import React from 'react';
import Footer from '../common/Footer';
import NavbarUI from '../common/Navbar';

function Contact() {
    return (
        <div>
            <div className={`upper-para`}>
                <p>Shop Wholesale Online. <a
                    href='#sign-up'
                    className='link-para'> Sign Up</a></p>
            </div>
             <div className='navbar-container'><NavbarUI /></div>
            <header className="masthead" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="page-heading text-center">
                                <h1 className="fw-bold" style={{ color: '#fff', padding: '50px', marginTop: '100px' }}>
                                    Contact Us
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="about-description">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6" style={{ padding: '10%' }}>
                            <h1 style={{ paddingBottom: '10px' }}>
                                For Local Businesses.
                            </h1>
                            <p>
                                We're here to solve the problem regarding the wholesale business in India. Through technology,
                                we make a network of local businesses, and through our platform, they sell their products in bulk
                                to every corner of India.
                            </p>
                        </div>
                        <div className="col-md-6" style={{ padding: '10%' }}>
                            <h1 style={{ paddingBottom: '10px' }}>
                                For Buyers.
                            </h1>
                            <p>
                                For buyers, you buy what your customers love. We believe that our platform provides the best
                                products, and through our technology, we share the products that are also loved by your customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default Contact;
