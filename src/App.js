import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from '../src/layout/Nav.jsx';

import Services from '../src/pages/Services.jsx';

import Products from '../src/pages/Products.jsx';

import About_us from '../src/pages/Aboutus.jsx';

import Portfolio from '../src/pages/Portfolio.jsx';

import FAQ from '../src/pages/FAQ.jsx';

import Contacts from '../src/pages/Contacts.jsx';

import MakeRequest from '../src/pages/MakeRequest.jsx';

import Calculation from '../src/pages/Calculation.jsx';

function App() {
    return (
        <Router>

            <Nav />
            <Routes>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Aboutus" element={<About_us/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/FAQ" element={<FAQ/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="/MakeRequest" element={<MakeRequest/>}/>
                <Route path="/Calculation" element={<Calculation/>}/>
            </Routes>
        </Router>
    );
}

export default App;