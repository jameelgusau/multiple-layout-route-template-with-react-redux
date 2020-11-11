import React from 'react'
import Navbar from '../LandingPage/burger/Navbar'
//import Header from '../LandingPage/Header'
import Footer from '../LandingPage/Footer'


export default ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            { children }
            <Footer />
        </>
    )
}
