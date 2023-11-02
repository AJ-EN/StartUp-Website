import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {

    // const addSpaceBetweenCharacters = (word) => {
    //     return word.split('').map((char, index) => (
    //         <span key={index}>{char}&nbsp;</span>
    //     ));
    // };

    const companyName = 'UNIQUEB2B'.replace(/(.)/g, '$1\u00a0');

    const year = new Date().getFullYear();


    return (
        <MDBFooter
            bgColor='light'
            className='text-center text-lg-start text-muted'>
            <section
                className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div
                    className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://facebook.com'
                        className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer
                    className='text-center text-md-start mt-5'>
                    <MDBRow
                        className='mt-3'>
                        <MDBCol
                            md="3" lg="4" xl="3"
                            className='mx-auto mb-4'>
                            <h6
                                className='text-uppercase fw-normal mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                {companyName}
                            </h6>
                            <p
                                className='fw-bold'>
                                The online wholesale marketplace connecting independent retailers and brands around the world.
                            </p>
                        </MDBCol>
                        <MDBCol
                            md="4" lg="3" xl="3"
                            className='mx-auto mb-md-0 mb-4'>
                            <h6
                                className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Rajasthan, Jaipur
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                <a
                                    href='mailto:ayushjangid110@gmail.com'
                                    className='text-black '>
                                    ayushjangid110@gmail.com</a>
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 91 7014563058
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 91 7340440254
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © {year} Copyright
            </div>
        </MDBFooter>
    );
}

export default Footer;