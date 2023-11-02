import React from 'react';
// import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdbreact/dist/css/mdb.css';
import NavbarUI from './common/Navbar';
import Header from './pages/Header';
import Footer from './common/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import '../assets/styles/navbar.css';
import '../assets/styles/header.css';
import '../assets/styles/about.css';
import '../assets/styles/contact.css';
import localImage from '../assets/images/local-store.jpg';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/home" element={<HomeLayout />}></Route>
                <Route exact path="/about" element={<About image={localImage} />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>

            {/* <div>
                <Router>
                    <Routes>
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Router>
                <NavbarUI />
                <Header />
                <Footer />
            </div> */}
        </Router>
    );
}

function HomeLayout() {
    return (
        <div>
            <div className={`upper-para`}>
                <p>Shop Wholesale Online. <a
                    href='#sign-up'
                    className='link-para'> Sign Up</a></p>
            </div>
            <div className='navbar-container'> <NavbarUI /></div>
            <Header />
            <Footer />
        </div>
    );
}







export default App;